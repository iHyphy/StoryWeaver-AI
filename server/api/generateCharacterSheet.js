require('dotenv').config();

console.log(process.env.OPENAI_API_KEY);

console.log('API route registered: POST /api/generateCharacterSheet');

const express = require('express');
const router = express.Router();
const https = require('https'); // Import the 'https' module for making HTTP requests

const openaiApiKey = process.env.OPENAI_API_KEY;

router.post('/', async (req, res) => {
  try {
    const messages = req.body.messages;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ message: 'Invalid request body: messages must be an array.' });
    }

    const responseMessage = await processMessageToChatGPT(messages);
    res.json({ message: responseMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while processing the message.', error: error.message });
  }
});


async function processMessageToChatGPT(chatMessages) {
  try {
    const systemMessage = {
      role: "system",
      content: "Speak like you are a master D&D player that creates character sheets for your friends."
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...chatMessages.map(message => ({ role: 'user', content: message }))],
    };

    console.log('Sending request to OpenAI API:', apiRequestBody); // Log the request body

    const requestOptions = {
      hostname: 'api.openai.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      }
    };

    const responseData = await sendRequest(requestOptions, apiRequestBody);
    console.log('OpenAI API response:', responseData); // Log the response data

    if (!responseData || !responseData.choices || !responseData.choices[0] || !responseData.choices[0].message) {
      console.error('Invalid response from OpenAI API:', responseData);
      throw new Error('Unexpected API response');
    }

    return responseData.choices[0].message.content;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
}

function sendRequest(options, requestBody) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const responseData = JSON.parse(data);
          resolve(responseData);
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on('error', error => {
      reject(error);
    });
    req.write(JSON.stringify(requestBody));
    req.end();
  });
}

module.exports = router;
