const express = require('express');
const router = express.Router();
const { createCourse, getCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const {checkRoles} = require('../middlewares/checkRole')
// Create a new course
router.post('/',checkRoles(['admin','faculty']), createCourse);

// Get a list of all courses
router.get('/',checkRoles(['admin','faculty']), getCourse);

// Update course details
router.put('/:id',checkRoles(['admin','faculty']), updateCourse);

// Delete a course
router.delete('/:id',checkRoles(['admin','faculty']), deleteCourse);

module.exports = router;
