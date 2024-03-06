const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt
const User = require('../models/user');

// Route for creating a new user
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Log the error to the console
    console.error('Error creating user:', error);
    // Send an error response
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Other routes remain the same...

module.exports = router;
