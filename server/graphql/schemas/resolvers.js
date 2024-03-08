const { User } = require('../../models/user'); // Ensure that the User model is imported
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const resolvers = {
  Mutation: {
    signup: async (_, args) => {
      const { username, email, password } = args;
      try {
        const user = await User.create({ username, email, password });
        const token = jwt.sign({ userId: user._id }, 'chickentortilla1');
        return { token, user };
      } catch (error) {
        throw new Error('Signup failed');
      }
    },
    login: async (_, args) => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
          throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user._id }, config.jwtSecret);
        return { token, user };
      } catch (error) {
        throw new Error('Login failed');
      }
    }
  },
  Query:{
    users:async() => {
      return User.find()
    }
  }
};

module.exports = resolvers;
