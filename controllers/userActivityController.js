const { body, validationResult } = require('express-validator');
const { logActivity, getUserActivities } = require('../models/userActivityModel');

const recordActivity = [
  body('userId').isInt().withMessage('Invalid user ID'),
  body('activityType').isString().withMessage('Invalid activity type'),
  body('activityDetails').optional().isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { userId, activityType, activityDetails } = req.body;
    try {
      const activityId = await logActivity(userId, activityType, activityDetails);
      res.status(201).json({ message: 'Activity recorded', activityId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to record activity' });
    }
  }
];

const listUserActivities = async (req, res) => {
  try {
    const activities = await getUserActivities(req.params.userId);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user activities' });
  }
};

module.exports = {
  recordActivity,
  listUserActivities,
};
