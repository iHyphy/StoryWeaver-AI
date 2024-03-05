const router = require('express').Router();
const axios = require('axios');
const generateCharacterSheet = require('./generateCharacterSheet');
console.log('hello');
// router.use('/generate-character-sheet', generateCharacterSheet);

router.post('/generate-character-sheet', async (req, res) => {
  try {
    // Extract user responses from the request body
    const {
      name,
      characterClass,
      race,
      background,
      alignment,
      personality,
      backstory,
      enemyType,
      location
    } = req.body;

    // Replace 'OPEN_AI_KEY' with your actual OpenAI API key
    const openaiApiKey = process.env.OPEN_AI_KEY;
    // Set the OpenAI API endpoint for the gpt-3.5-turbo engine
    const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';
    // Make a POST request to the OpenAI API
    const response = await axios.post(openaiEndpoint, {
      "model": "gpt-3.5-turbo",
      "messages": [{
          "role": "system",
          "content": "You are a fantasy character sheet generator. Return the response in formatted HTML with white text and no background color. Generate a character sheet based on the user's input."
        },
        {
          "role": "user",
          "content": generatePrompt(req.body)
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    });
    // Extract the generated character sheet from the OpenAI API response
    const characterSheet = response.data.choices[0].message.content;
    // Send the generated character sheet as the response
    res.send(characterSheet);
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define a function to generate a prompt based on user responses
function generatePrompt({
  name,
  characterClass,
  race,
  background,
  alignment,
  personality,
  backstory,
  enemyType,
  location
}) {
  return `Character Name: ${name}\n` +
    `Class: ${characterClass}\n` +
    `Race: ${race}\n` +
    `Background: ${background}\n` +
    `Alignment: ${alignment}\n` +
    `Personality: ${personality}\n` +
    `Backstory: ${backstory}\n` +
    `Enemy Type: ${enemyType}\n` +
    `Location: ${location}\n` +
    'Generate a character sheet:';
}

module.exports = router;