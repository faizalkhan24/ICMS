const db = require('../db');

const getParentDetails = async (parentId) => {
  const [rows] = await db.query('SELECT * FROM parents WHERE id = ?', [parentId]);
  return rows[0];
};

const getStudentProgress = async (studentId) => {
  const [performance] = await db.query('SELECT * FROM performance WHERE student_id = ?', [studentId]);
  const [attendance] = await db.query('SELECT * FROM attendance WHERE student_id = ?', [studentId]);
  return { performance, attendance };
};

module.exports = {
  getParentDetails,
  getStudentProgress,
};
