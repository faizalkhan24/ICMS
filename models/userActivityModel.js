const db = require('../db');

const logActivity = async (userId, activityType, activityDetails) => {
  const [result] = await db.query('INSERT INTO user_activity (user_id, activity_type, activity_details) VALUES (?, ?, ?)', [userId, activityType, activityDetails]);
  return result.insertId;
};

const getUserActivities = async (userId) => {
  const [rows] = await db.query('SELECT * FROM user_activity WHERE user_id = ?', [userId]);
  return rows;
};

module.exports = {
  logActivity,
  getUserActivities,
};
