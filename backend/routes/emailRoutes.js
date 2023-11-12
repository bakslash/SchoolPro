// routes/emailRoutes.js
const express = require('express');
const { sendTestEmail } = require('../controllers/emailController');

const router = express.Router();

// POST endpoint for sending a test email
router.post('/send-email', sendTestEmail);

module.exports = router;
