

const { Student } = require('../models'); // Import your Student model

exports.createStudent = async (req, res) => {
  try {
    // Get the student data from the request body
    const { name, rollNumber, courseId } = req.body;

    // Create a new student in the database
    const newStudent = await Student.create({ name, rollNumber, courseId });

    return res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    return res.status(500).json({ error: 'Unable to create the student.' });
  }
};


exports.getStudent = async (req, res) => {
    try {
      // Retrieve a list of all students from the database
      const students = await Student.findAll();
  
      return res.status(200).json(students);
    } catch (error) {
      console.error('Error retrieving students:', error);
      return res.status(500).json({ error: 'Unable to retrieve students.' });
    }
  };
  exports.updateStudent = async (req, res) => {
    try {
      const studentId = req.params.id; // Assuming you have the student ID in the route parameters
  
      // Get the updated student data from the request body
      const { name, rollNumber, courseId } = req.body;
  
      // Update the student in the database
      const [updatedCount] = await Student.update(
        { name, rollNumber, courseId },
        { where: { id: studentId } }
      );
  
      if (updatedCount > 0) {
        return res.status(200).json({ message: 'Student updated successfully.' });
      } else {
        return res.status(404).json({ error: 'Student not found.' });
      }
    } catch (error) {
      console.error('Error updating student:', error);
      return res.status(500).json({ error: 'Unable to update the student.' });
    }
  };
  exports.deleteStudent = async (req, res) => {
    try {
      const studentId = req.params.id; // Assuming you have the student ID in the route parameters
  
      // Delete the student from the database
      const deletedCount = await Student.destroy({ where: { id: studentId } });
  
      if (deletedCount > 0) {
        return res.status(204).send(); // Return 204 No Content on successful deletion
      } else {
        return res.status(404).json({ error: 'Student not found.' });
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      return res.status(500).json({ error: 'Unable to delete the student.' });
    }
  };
      
