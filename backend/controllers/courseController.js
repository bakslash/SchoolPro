

// Create a new course
const { Course } = require('../models'); // Import your Course model

exports.createCourse = async (req, res) => {
  try {
    // Get the course data from the request body
    const { name, code, description } = req.body;

    // Create a new course in the database
    const newCourse = await Course.create({ name, code, description });

    return res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    return res.status(500).json({ error: 'Unable to create the course.' });
  }
};


// Get a list of all courses
exports.getCourse = async (req, res) => {
    try {
      // Retrieve a list of all courses from the database
      const courses = await Course.findAll();
  
      return res.status(200).json(courses);
    } catch (error) {
      console.error('Error retrieving courses:', error);
      return res.status(500).json({ error: 'Unable to retrieve courses.' });
    }
  };
  

// Update course details
exports.updateCourse = async (req, res) => {
    try {
      const courseId = req.params.id; // Assuming you have the course ID in the route parameters
  
      // Get the updated course data from the request body
      const { name, code, description } = req.body;
  
      // Update the course in the database
      const [updatedCount] = await Course.update(
        { name, code, description },
        { where: { id: courseId } }
      );
  
      if (updatedCount > 0) {
        return res.status(200).json({ message: 'Course updated successfully.' });
      } else {
        return res.status(404).json({ error: 'Course not found.' });
      }
    } catch (error) {
      console.error('Error updating course:', error);
      return res.status(500).json({ error: 'Unable to update the course.' });
    }
  };
  

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
      const courseId = req.params.id; // Assuming you have the course ID in the route parameters
  
      // Delete the course from the database
      const deletedCount = await Course.destroy({ where: { id: courseId } });
  
      if (deletedCount > 0) {
        return res.status(204).send(); // Return 204 No Content on successful deletion
      } else {
        return res.status(404).json({ error: 'Course not found.' });
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      return res.status(500).json({ error: 'Unable to delete the course.' });
    }
  };
  
