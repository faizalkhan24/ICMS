const db = require('../db');

const uploadMaterial = async (courseId, materialUrl) => {
  const [result] = await db.query(
    'INSERT INTO course_materials (course_id, material_url) VALUES (?, ?)',
    [courseId, materialUrl]
  );
  return result.insertId;
};

const getMaterialsByCourseId = async (courseId) => {
  const [rows] = await db.query('SELECT * FROM course_materials WHERE course_id = ?', [courseId]);
  return rows;
};

module.exports = {
  uploadMaterial,
  getMaterialsByCourseId,
};
