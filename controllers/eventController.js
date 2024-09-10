const { createEvent, registerForEvent, getAllEvents, getEventById } = require('../models/eventModel');

const addEvent = async (req, res) => {
  const { name, description, date } = req.body;

  // Basic input validation
  if (!name || !description || !date) {
    return res.status(400).json({ error: 'All fields (name, description, date) are required' });
  }

  try {
    const eventId = await createEvent(name, description, date);
    res.status(201).json({ message: 'Event created successfully', eventId });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).json({ error: 'Failed to create event. Please try again later.' });
  }
};

const registerEvent = async (req, res) => {
  const { eventId, participantName } = req.body;

  // Basic input validation
  if (!eventId || !participantName) {
    return res.status(400).json({ error: 'Both event ID and participant name are required' });
  }

  try {
    const registrationId = await registerForEvent(eventId, participantName);
    res.status(201).json({ message: 'Registration successful', registrationId });
  } catch (error) {
    console.error('Error registering for event:', error.message);
    res.status(500).json({ error: 'Failed to register for event. Please try again later.' });
  }
};

const listEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    console.error('Error retrieving events:', error.message);
    res.status(500).json({ error: 'Failed to retrieve events. Please try again later.' });
  }
};

const getEvent = async (req, res) => {
  const { id } = req.params;

  // Basic input validation
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Valid event ID is required' });
  }

  try {
    const event = await getEventById(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error('Error retrieving event:', error.message);
    res.status(500).json({ error: 'Failed to retrieve event. Please try again later.' });
  }
};

module.exports = {
  addEvent,
  registerEvent,
  listEvents,
  getEvent,
};
