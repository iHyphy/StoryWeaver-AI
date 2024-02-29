const express = require('express');
const router = express.Router();
const Encounter = require('../models/dndModels/encounters');

// Route for creating a new encounter
router.post('/', async (req, res) => {
  try {
    const { name, location, participants, monsters } = req.body; // Destructure req.body directly
    if (!name || !location || !participants || !monsters) {
      // Check if any required fields are missing
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new encounter with the received data
    const newEncounter = await Encounter.create({ name, location, participants, monsters });
    res.status(201).json(newEncounter); // Send back the created encounter
  } catch (error) {
    console.error('Error creating encounter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for getting all encounters
router.get('/', async (req, res) => {
    try {
      // Retrieve all encounters from the database
      const encounters = await Encounter.find();
      
      // Send the retrieved encounters as a response
      res.status(200).json(encounters);
    } catch (error) {
      console.error('Error getting encounters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for updating an encounter by ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the encounter ID from the request parameters
      const updateData = req.body; // Get the updated encounter data from the request body
  
      // Update the encounter by ID with the new data
      const updatedEncounter = await Encounter.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedEncounter) {
        // If no encounter is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Encounter not found' });
      }
  
      // Send the updated encounter as a response
      res.status(200).json(updatedEncounter);
    } catch (error) {
      console.error('Error updating encounter:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route for deleting an encounter by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the encounter ID from the request parameters
  
      // Find the encounter by ID and delete it
      const deletedEncounter = await Encounter.findByIdAndDelete(id);
  
      if (!deletedEncounter) {
        // If no encounter is found with the given ID, return a 404 error
        return res.status(404).json({ error: 'Encounter not found' });
      }
  
      // Send a success message as a response
      res.status(200).json({ message: 'Encounter deleted successfully' });
    } catch (error) {
      console.error('Error deleting encounter:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;