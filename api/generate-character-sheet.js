const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to generate a character sheet
app.post('/api/generate-character-sheet', (req, res) => {
  try {
    // Retrieve character data from the request body
    const { name, class: characterClass, race, background, alignment, personality, backstory, enemyType, location /*, other attributes */ } = req.body;

    // Generate the character sheet 
    const characterSheet = `
      <h2>Character Sheet</h2>
      <p>Name: ${name}</p>
      <p>Class: ${characterClass}</p>
      <p>Race: ${race}</p>
      <p>Background: ${background}</p>
      <p>Alignment: ${alignment}</p>
      <p>Personality: ${personality}</p>
      <p>Backstory: ${backstory}</p>
      <p>Enemy Type: ${enemyType}</p>
      <p>Location: ${location}</p>
      <!-- Add other attributes here -->
    `;

    // Send the character sheet as a response
    res.send(characterSheet);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});