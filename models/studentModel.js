const db = require('../db');

const enrollStudent = async (name, age, enrollmentDate, parentId) => {
  const [result] = await db.query(
    'INSERT INTO students (name, age, enrollment_date, parent_id) VALUES (?, ?, ?, ?)',
    [name, age, enrollmentDate, parentId]
  );
  return result.insertId;
};

const recordAttendance = async (studentId, date, status) => {
  const [result] = await db.query(
    'INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)',
    [studentId, date, status]
  );
  return result.insertId;
};

const recordPerformance = async (studentId, subject, grade, date) => {
  const [result] = await db.query(
    'INSERT INTO performance (student_id, subject, grade, date) VALUES (?, ?, ?, ?)',
    [studentId, subject, grade, date]
  );
  return result.insertId;
};

const getAllStudents = async () => {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
};

module.exports = {
  enrollStudent,
  recordAttendance,
  recordPerformance,
  getAllStudents,
};
