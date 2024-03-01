const express = require('express');
const router = express.Router();
const Character = require('../models/dndModels/characters');

// Route for creating a new character
router.post('/', async (req, res) => {
  try {
    const { name, characterClass, level, race } = req.body; // Destructure req.body directly
    if (!name || !characterClass || !level || !race) {
      // Check if any required fields are missing
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new character with the received data
    const newCharacter = await Character.create({ name, characterClass, level, race });
    res.status(201).json(newCharacter); // Send back the created character
  } catch (error) {
    console.error('Error creating character:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for getting all characters
router.get('/', async (req, res) => {
    try {
      // Retrieve all characters from the database
      const characters = await Character.find();
      
      // Send the retrieved characters as a response
      res.status(200).json(characters);
    } catch (error) {
      console.error('Error getting characters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for updating a character by ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the character ID from the request parameters
      const updateData = req.body; // Get the updated character data from the request body
  
      // Update the character by ID with the new data
      const updatedCharacter = await Character.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedCharacter) {
        // If no character is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Send the updated character as a response
      res.status(200).json(updatedCharacter);
    } catch (error) {
      console.error('Error updating character:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for deleting a character by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the character ID from the request parameters
  
      // Find the character by ID and delete it
      const deletedCharacter = await Character.findByIdAndDelete(id);
  
      if (!deletedCharacter) {
        // If no character is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Send a success message as a response
      res.status(200).json({ message: 'Character deleted successfully' });
    } catch (error) {
      console.error('Error deleting character:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;