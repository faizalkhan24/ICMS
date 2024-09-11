const db = require('../db');

const createDiscussion = async (title, content, authorId) => {
  const query = 'INSERT INTO discussions (title, content, author_id) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [title, content, authorId]);
  return result.insertId;
};

const getAllDiscussions = async () => {
  const [rows] = await db.query('SELECT * FROM discussions');
  return rows;
};

module.exports = {
  createDiscussion,
  getAllDiscussions
};
