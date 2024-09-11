const { registerForEvent, getAllEvents } = require('../models/eventModel');

const registerEvent = async (req, res) => {
  const { eventId, participantName } = req.body;
  
  try {
    const registrationId = await registerForEvent(eventId, participantName);
    res.status(201).json({ message: 'Registration successful', registrationId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register for event' });
  }
};

const listEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
};

module.exports = { registerEvent, listEvents };
