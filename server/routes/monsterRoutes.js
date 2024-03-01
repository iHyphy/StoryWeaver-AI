const express = require('express');
const router = express.Router();
const Monster = require('../models/dndModels/monsters');

// Route for creating a new monster
router.post('/', async (req, res) => {
  try {
    const { name, type, hitPoints, attack } = req.body; // Destructure req.body directly
    if (!name || !type || !hitPoints || !attack) {
      // Check if any required fields are missing
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new monster with the received data
    const newMonster = await Monster.create({ name, type, hitPoints, attack });
    res.status(201).json(newMonster); // Send back the created monster
  } catch (error) {
    console.error('Error creating monster:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for getting all monsters
router.get('/', async (req, res) => {
    try {
      // Retrieve all monsters from the database
      const monsters = await Monster.find();
      
      // Send the retrieved monsters as a response
      res.status(200).json(monsters);
    } catch (error) {
      console.error('Error getting monsters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for updating a monster by ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the monster ID from the request parameters
      const updateData = req.body; // Get the updated monster data from the request body
  
      // Update the monster by ID with the new data
      const updatedMonster = await Monster.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedMonster) {
        // If no monster is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Monster not found' });
      }
  
      // Send the updated monster as a response
      res.status(200).json(updatedMonster);
    } catch (error) {
      console.error('Error updating monster:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for deleting a monster by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the monster ID from the request parameters
  
      // Find the monster by ID and delete it
      const deletedMonster = await Monster.findByIdAndDelete(id);
  
      if (!deletedMonster) {
        // If no monster is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Monster not found' });
      }
  
      // Send a success message as a response
      res.status(200).json({ message: 'Monster deleted successfully' });
    } catch (error) {
      console.error('Error deleting monster:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;