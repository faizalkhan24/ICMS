const db = require('../db');

const createEvent = async (name, description, date) => {
  if (!name || typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid event name');
  }

  if (!description || typeof description !== 'string' || description.trim() === '') {
    throw new Error('Invalid event description');
  }

  if (isNaN(new Date(date).getTime())) {
    throw new Error('Invalid event date');
  }

  try {
    const [result] = await db.query(
      'INSERT INTO events (name, description, date) VALUES (?, ?, ?)',
      [name, description, date]
    );
    return result.insertId;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to create event. Please try again later.');
  }
};

const registerForEvent = async (eventId, participantName) => {
  if (isNaN(eventId) || eventId <= 0) {
    throw new Error('Invalid event ID');
  }

  if (!participantName || typeof participantName !== 'string' || participantName.trim() === '') {
    throw new Error('Invalid participant name');
  }

  try {
    const [result] = await db.query(
      'INSERT INTO event_registrations (event_id, participant_name) VALUES (?, ?)',
      [eventId, participantName]
    );
    return result.insertId;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to register for event. Please try again later.');
  }
};

const getAllEvents = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM events');
    return rows;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to retrieve events. Please try again later.');
  }
};

const getEventById = async (id) => {
  if (isNaN(id) || id <= 0) {
    throw new Error('Invalid event ID');
  }

  try {
    const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [id]);
    return rows[0] || null;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to retrieve event. Please try again later.');
  }
};

module.exports = {
  createEvent,
  registerForEvent,
  getAllEvents,
  getEventById,
};
