const db = require('../db');

const createUser = async (name, email, password, role = 'user') => {
  const [result] = await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const updateUsers = async (id, name, email, password, role) => {
  const [result] = await db.query('UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?', [name, email, password, role, id]);
  return result.affectedRows;
};

const deleteUsers = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows;
};

const getAllUser = async () => {
  const [rows] = await db.query('SELECT id, name, email, role FROM users');
  return rows;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateUsers,
  deleteUsers,
  getAllUser,
};
