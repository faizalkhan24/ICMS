const db = require('../db');

const createAnnouncement = async (title, content, authorId) => {
  const query = 'INSERT INTO announcements (title, content, author_id) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [title, content, authorId]);
  return result.insertId;
};

const getAllAnnouncements = async () => {
  const [rows] = await db.query('SELECT * FROM announcements');
  return rows;
};

module.exports = {
  createAnnouncement,
  getAllAnnouncements
};
