const User = require('../../../server/models/user');
const { signToken, AuthenticationError } = require('../../utils/authMiddleware');
const fetch = require('node-fetch');
require('dotenv').config(); // Import dotenv to access environment variables

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    getOpenAIApiKey: async () => {
      // Retrieve the OpenAI API key from the environment variable
      return process.env.REACT_APP_OPENAI_API_KEY || '';
    },
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      try {
        // Validate if username is provided
        if (!username) {
          throw new Error('Username is required.');
        }
  
        // Validate if email is provided
        if (!email) {
          throw new Error('Email is required.');
        }
  
        // Validate if password is provided
        if (!password) {
          throw new Error('Password is required.');
        }
  
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('Email is already registered.');
        }
  
        // Create the user
        const user = await User.create({ username, email, password });
  
        // Generate token
        const token = signToken(user);
  
        return { token, user };
      } catch (error) {
        // Handle specific error messages
        if (error.message.startsWith('E11000 duplicate key error')) {
          throw new Error('Email or username already exists.');
        }
  
        // If it's a known error, throw it directly
        console.log(error)
        throw error;
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('User not found');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }
  
        const token = signToken(user);
        return { token, user };
        
      } catch (error) {
        console.log(error)
      }
    },
    setOpenAIApiKey: async (_, { apiKey }) => {
      try {
        // You can perform validation or additional checks here
        
        // For demonstration purposes, let's just set it to an environment variable
        process.env.REACT_APP_OPENAI_API_KEY = apiKey;
        
        // You might want to return a success message or the new API key
        return 'OpenAI API key has been set successfully';
      } catch (error) {
        console.error('Error setting OpenAI API key:', error);
        throw new Error('Failed to set OpenAI API key');
      }
    },
  },
};

module.exports = resolvers;
