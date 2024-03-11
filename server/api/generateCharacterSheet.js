require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
const app = express();


// Initialize OpenAI API client
const openai = new OpenAI({ apiKey: "process.env.OPENAI_API_KEY" });

// Middleware to parse JSON bodies
app.use(bodyParser.json());



// POST endpoint to generate a character sheet using OpenAI
app.post('/', async (req, res) => {
  try {
    // Extract character attributes from the request body
    const { name, race, class: characterClass, level, background, alignment, playerName } = req.body;

    // Create a prompt for OpenAI based on the character attributes
    const prompt = `
      Character name: ${name}
      Race: ${race}
      Class: ${characterClass}
      Level: ${level}
      Background: ${background}
      Alignment: ${alignment}
      Player name: ${playerName}
    `;

    // Call OpenAI API to generate the character sheet
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // Choose the appropriate model
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that creates characters for a D&D campaign based on the prompts from the user which are Character Name, Race, Class, Level, Background, Alignment, and Player Name.',
          max_tokens: 100,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extract the generated character sheet from the OpenAI API response
    const generatedSheet = response.data.choices[0].message.content;

    // Send the generated character sheet as a response
    res.send(generatedSheet);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
