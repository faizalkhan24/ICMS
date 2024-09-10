const db = require('../db');

const createCourse = async (name, description, teacherId) => {
  const [result] = await db.query(
    'INSERT INTO courses (name, description, teacher_id) VALUES (?, ?, ?)',
    [name, description, teacherId]
  );
  return result.insertId;
};

const uploadCourseMaterial = async (courseId, materialUrl) => {
  const [result] = await db.query(
    'INSERT INTO course_materials (course_id, material_url) VALUES (?, ?)',
    [courseId, materialUrl]
  );
  return result.insertId;
};

const scheduleClass = async (courseId, startTime, endTime) => {
  const [result] = await db.query(
    'INSERT INTO class_schedule (course_id, start_time, end_time) VALUES (?, ?, ?)',
    [courseId, startTime, endTime]
  );
  return result.insertId;
};

const getAllCourses = async () => {
  const [rows] = await db.query('SELECT * FROM courses');
  return rows;
};

module.exports = {
  createCourse,
  uploadCourseMaterial,
  scheduleClass,
  getAllCourses,
};
