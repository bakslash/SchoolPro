const express = require('express');
const router = express.Router();
const { createRoles, getRoles, updateRoles, deleteRoles } = require('../controllers/rolesController');

// Create a new Roles
//router.post('/', createRoles);

// Get a list of all Roless
router.get('/', getRoles);

// Update Roles details
//router.put('/:id', updateRoles);

// Delete a Roles
//router.delete('/:id', deleteRoles);

module.exports = router;
