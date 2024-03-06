// Import necessary modules
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login route
router.post('/login', async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Find user by email in the database
    const user = await User.findOne({ email });

    if (!user) {
      // If user not found, return error response
      return res.status(404).json({ message: 'User not found' });
    }

    // Log retrieved user for debugging
    console.log('Retrieved user:', user);

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // If password does not match, return error response
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If password is correct, generate JWT token
    const token = jwt.sign({ userId: user._id }, 'password', { expiresIn: '1h' });

    // Return token in response
    res.status(200).json({ token });

  } catch (error) {
    // Log any errors that occur during login
    console.error('Error logging in:', error);
    // Return error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve user information
router.get('/user/:id', async (req, res) => {
  try {
    // Extract user ID from request parameters
    const userId = req.params.id;

    // Find user by ID in the database
    const user = await User.findById(userId);

    if (!user) {
      // If user not found, return error response
      return res.status(404).json({ message: 'User not found' });
    }

    // If user found, return user information
    res.status(200).json(user);

  } catch (error) {
    // Log any errors that occur during user retrieval
    console.error('Error retrieving user:', error);
    // Return error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
