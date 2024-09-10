const db = require('../db');

const createExam = async (name, date, courseId) => {
  const [result] = await db.query(
    'INSERT INTO exams (name, date, course_id) VALUES (?, ?, ?)',
    [name, date, courseId]
  );
  return result.insertId;
};

const recordExamResult = async (examId, studentId, score, grade) => {
  const [result] = await db.query(
    'INSERT INTO exam_results (exam_id, student_id, score, grade) VALUES (?, ?, ?, ?)',
    [examId, studentId, score, grade]
  );
  return result.insertId;
};

const issueCertification = async (studentId, courseId, certificationDate) => {
  const [result] = await db.query(
    'INSERT INTO certifications (student_id, course_id, certification_date) VALUES (?, ?, ?)',
    [studentId, courseId, certificationDate]
  );
  return result.insertId;
};

module.exports = {
  createExam,
  recordExamResult,
  issueCertification,
};
