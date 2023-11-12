const express = require('express');
const router = express.Router();
const { createStudent, getStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const {checkRoles} = require('../middlewares/checkRole')

// Create a new student
router.post('/add',checkRoles(['admin','faculty']),createStudent);

// Get a list of all students
router.get('/',checkRoles(['admin','faculty']), getStudent);

// Update student details
router.put('/:id',checkRoles(['admin','faculty']), updateStudent);

// Delete a student
router.delete('/:id',checkRoles(['admin','faculty']), deleteStudent);

module.exports = router;
