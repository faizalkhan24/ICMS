const db = require('../db');

const getStudentPerformance = async (studentId) => {
  const [rows] = await db.query(`
    SELECT 
      students.name, 
      courses.name AS course_name, 
      grades.grade 
    FROM students
    JOIN enrollments ON students.id = enrollments.student_id
    JOIN courses ON enrollments.course_id = courses.id
    JOIN grades ON enrollments.id = grades.enrollment_id
    WHERE students.id = ?
  `, [studentId]);
  return rows;
};

const getCourseCompletion = async (courseId) => {
  const [rows] = await db.query(`
    SELECT 
      students.name, 
      COUNT(grades.id) AS completed 
    FROM students
    JOIN enrollments ON students.id = enrollments.student_id
    JOIN grades ON enrollments.id = grades.enrollment_id
    WHERE enrollments.course_id = ? AND grades.grade >= 50
    GROUP BY students.id
  `, [courseId]);
  return rows;
};

module.exports = {
  getStudentPerformance,
  getCourseCompletion,
};
