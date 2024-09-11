const express = require('express');
const { getIslamicEvents } = require('../controllers/islamicEventController');
const router = express.Router();

router.get('/islamic-events', getIslamicEvents);

module.exports = router;
