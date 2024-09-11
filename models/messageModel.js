const db = require('../db');

const sendMessage = async (senderId, receiverId, content) => {
  const query = 'INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [senderId, receiverId, content]);
  return result.insertId;
};

const getMessagesBetweenUsers = async (senderId, receiverId) => {
  const query = 'SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)';
  const [rows] = await db.query(query, [senderId, receiverId, receiverId, senderId]);
  return rows;
};

module.exports = {
  sendMessage,
  getMessagesBetweenUsers
};
