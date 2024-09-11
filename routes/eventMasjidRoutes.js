const express = require('express');
const { registerEvent, listEvents } = require('../controllers/eventController');
const router = express.Router();

router.post('/register', registerEvent);
router.get('/events', listEvents);

module.exports = router;
