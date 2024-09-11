const db = require('../db');

const createVisitor = async (name, visitDate, guestType, contactInfo, notes) => {
  const query = 'INSERT INTO visitors (name, visit_date, guest_type, contact_info, notes) VALUES (?, ?, ?, ?, ?)';
  const [result] = await db.query(query, [name, visitDate, guestType, contactInfo, notes]);
  return result.insertId;
};

const getAllVisitors = async () => {
  const [rows] = await db.query('SELECT * FROM visitors');
  return rows;
};

const getVisitorById = async (id) => {
  const [rows] = await db.query('SELECT * FROM visitors WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  createVisitor,
  getAllVisitors,
  getVisitorById
};
