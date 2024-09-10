const db = require('../db');

const createSchedule = async (courseId, startTime, endTime) => {
  const [result] = await db.query(
    'INSERT INTO class_schedule (course_id, start_time, end_time) VALUES (?, ?, ?)',
    [courseId, startTime, endTime]
  );
  return result.insertId;
};

const getScheduleByCourseId = async (courseId) => {
  const [rows] = await db.query('SELECT * FROM class_schedule WHERE course_id = ?', [courseId]);
  return rows;
};

module.exports = {
  createSchedule,
  getScheduleByCourseId,
};
