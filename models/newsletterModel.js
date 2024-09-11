const db = require('../db');

const createNewsletter = async (title, content) => {
  const query = 'INSERT INTO newsletters (title, content) VALUES (?, ?)';
  const [result] = await db.query(query, [title, content]);
  return result.insertId;
};

const getAllNewsletters = async () => {
  const [rows] = await db.query('SELECT * FROM newsletters');
  return rows;
};

module.exports = {
  createNewsletter,
  getAllNewsletters
};
