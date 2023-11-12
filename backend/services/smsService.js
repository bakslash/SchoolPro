const credentials = {
    apiKey: '58d21067c989ae7d91157f80db35a23bbe39de01c324d3c850ed3e6b336dd3e2',
    username: 'bakslash', // use 'sandbox' for development in the test environment
  };
  
  const Africastalking = require('africastalking')(credentials);
  const sms = Africastalking.SMS;
  
  const sendSms = async (pass) => {
    // Set the message parameters
    const smsOptions = {
      to: ['+254706143819'], // Replace with the recipient's phone number including the country code
      message: `${pass}`,
    };
  
    // Send the SMS
    try {
      const response = await sms.send(smsOptions);
      console.log('SMS sent successfully:', response);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };
  
  module.exports = { sendSms };
  