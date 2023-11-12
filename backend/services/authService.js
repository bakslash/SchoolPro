// authService.js
const jwtUtils = require('../utils/jwtUtils');
const models = require('../models'); // Assuming you have a models file

const authenticateUser = async (email, password) => {
  try {
    
    const user = await models.Users.findOne({
     where: { email },
     
    });

    if (user) {
      // Generate a JWT token
      const token = jwtUtils.generateToken({ id: user.id, email: user.email, role:user.role });
      return { user, token };
    }

    return null;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

module.exports = { authenticateUser };
