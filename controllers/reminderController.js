const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendEventReminder = async (req, res) => {
  const { phoneNumber, eventName, eventDate } = req.body;

  try {
    await client.messages.create({
      body: `Reminder: The event ${eventName} is scheduled for ${eventDate}.`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    res.json({ message: 'Reminder sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reminder' });
  }
};

module.exports = { sendEventReminder };
