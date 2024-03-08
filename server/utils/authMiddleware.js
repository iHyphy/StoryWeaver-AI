/*
const jwt = require('jsonwebtoken');
const config = require('../config'); // Adjust the path if necessary

// Middleware function to verify JWT token
const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the decoded token payload to the request object
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return 401 Unauthorized error
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
*/

const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'chickentortilla1';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
