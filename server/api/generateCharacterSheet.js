require('dotenv').config();
console.log('API route registered: POST /api/generateCharacterSheet');

const express = require('express');
const router = express.Router();
const axios = require('axios');
const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

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

    const response = await axios.post("https://api.openai.com/v1/chat/completions", apiRequestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      }
    });

    const responseData = response.data;
    console.log('OpenAI API response:', responseData); // Log the response data

    if (!responseData || !responseData.choices || !responseData.choices[0] || !responseData.choices[0].message) {
      throw new Error('Unexpected API response');
    }

    return responseData.choices[0].message.content;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
}
module.exports = router;