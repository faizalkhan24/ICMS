const express = require('express');
const { recordActivity, listUserActivities } = require('../controllers/userActivityController');
const router = express.Router();

router.post('/activity', recordActivity);
router.get('/activity/:userId', listUserActivities);

module.exports = router;
