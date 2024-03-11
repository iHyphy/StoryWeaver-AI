const User = require('../../../server/models/user');
const  { signToken, AuthenticationError } = require('../../utils/authMiddleware');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
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
      try{ const user = await User.findOne({ email });
  
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
  }
};

module.exports = resolvers;

