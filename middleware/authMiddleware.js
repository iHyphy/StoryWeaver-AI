const jwt = require('jsonwebtoken');
const config = require('../server/config/config'); // Adjust the path if necessary

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
