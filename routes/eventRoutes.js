const express = require('express');
const router = express.Router();
const { addEvent, registerEvent, listEvents, getEvent } = require('../controllers/eventController');

router.post('/events', addEvent);
router.post('/events/register', registerEvent);
router.get('/events', listEvents);
router.get('/events/:id', getEvent);

module.exports = router;
