// config/emailConfig.js

module.exports = {
    service: 'gmail',
    port: 465,
   secure: true, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  