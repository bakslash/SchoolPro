const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models/index');
const { sendEmail } = require('../services/emailService');
const { sendSms } = require('../services/smsService');
const randomstring  = require("randomstring");

const authService = require('../services/authService');

// Separate function for creating a user
const createUser = async (email, roleId, role,hashedPassword) => {
  return models.Users.create({
    email,
    roleId,
    role,
    password: hashedPassword,
    status: 1, // Assuming 1 means "active"
  });
};

// Separate function for sending a test email
const sendTestEmail = async (email ,randomPassword) => {
  try {
    // Adjust this part based on your actual email content and subject
    const subject = 'Test Email Subject';
    const recipientName = 'Recipient Name'; // You might fetch this from the user's data
   // const customMessage = 'This is a test email from your application.';

    // Assuming you have a sendEmail function
    await sendEmail(email, subject, recipientName, randomPassword);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { email, roleId,role } = req.body;

    // Check if the email already exists
    const existingUser = await models.Users.findOne({ where: { email } });
    
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Generate a random password
    const randomPassword = randomstring.generate({
      length: 6,
      charset: 'numeric',
    });

    // Hash the random password
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // Create a new user with the provided roleId and the random password
    const newUser = await createUser(email, roleId,role, hashedPassword,);
    
    // Send a test email
    await sendSms(randomPassword)
   // await sendTestEmail(email);
    

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: { email: newUser.email, password: randomPassword,role:newUser.role }, // Return the generated password for demonstration purposes
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};









exports.loginUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const newUser = await authService.authenticateUser(email, password);
      
      
       if (newUser) {

    res.json({ user: newUser.user, token: newUser.token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }

      
    
    } catch (error) {
      console.error(error);
      next(error); // Pass the error to the next middleware
    }
  };
  
