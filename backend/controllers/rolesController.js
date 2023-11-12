const { Role } = require('../models'); // Import your Role model

exports.getRoles = async (req, res) => {
    try {
      // Retrieve a list of all Roles from the database
      const roles = await Role.findAll();
  
      return res.status(200).json(roles);
    } catch (error) {
      console.error('Error retrieving roles:', error);
      return res.status(500).json({ error: 'Unable to retrieve roles.' });
    }
  };

  exports.createRoles = async (req, res) => {
    try {
      // Get the Role data from the request body
      const { name, userId } = req.body;
  
      // Create a new Role in the database
      const newRole = await Role.create({ name, userId });
  
      return res.status(201).json(newRole);
    } catch (error) {
      console.error('Error creating role:', error);
      return res.status(500).json({ error: 'Unable to create the role.' });
    }
  };