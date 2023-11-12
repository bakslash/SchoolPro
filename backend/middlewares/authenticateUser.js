// middleware/authenticateUser.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const authenticateUser = (req, res, next) => {
  // Check for the presence of the token in the request headers
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token and decode the user information
    const decoded = jwt.verify(token, secretKey);
    
    req.user = decoded; // Attach user information to req.user

    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateUser;
