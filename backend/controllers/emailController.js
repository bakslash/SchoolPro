// controllers/emailController.js
const { sendEmail } = require('../services/emailService');



const sendTestEmail = async (req, res) => {
  const { to } = req.body;

  try {
    await sendEmail(to);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendTestEmail };
