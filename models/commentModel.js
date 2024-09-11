const db = require('../db');

const createComment = async (discussionId, content, authorId) => {
  const query = 'INSERT INTO comments (discussion_id, content, author_id) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [discussionId, content, authorId]);
  return result.insertId;
};

const getCommentsByDiscussionId = async (discussionId) => {
  const [rows] = await db.query('SELECT * FROM comments WHERE discussion_id = ?', [discussionId]);
  return rows;
};

module.exports = {
  createComment,
  getCommentsByDiscussionId
};
