const express = require('express');
const { sendEventReminder } = require('../controllers/reminderController');
const router = express.Router();

router.post('/send-reminder', sendEventReminder);

module.exports = router;
