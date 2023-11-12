// middleware/checkRoles.js
const models = require('../models'); // Adjust the path based on your project structure

const checkRoles = (Roles) => async (req, res, next) => {
  const { role } = req.user;

  console.log('User Role:', role);

  try {
    const allowedRoles = await models.Role.findOne({
      where: { name: role },
    });

    console.log('Allowed Roles:', allowedRoles);

    if (!allowedRoles || !allowedRoles.dataValues.name || !allowedRoles.dataValues.name.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  } catch (error) {
    console.error('Error checking roles for route:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { checkRoles };
