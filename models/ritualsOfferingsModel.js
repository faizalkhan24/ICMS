const db = require('../db');

const createRitualOffering = async (ritualName, description, offeringAmount, offeringDate) => {
  const query = 'INSERT INTO rituals_and_offerings (ritual_name, description, offering_amount, offering_date) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(query, [ritualName, description, offeringAmount, offeringDate]);
  return result.insertId;
};

const getAllRitualsOfferings = async () => {
  const [rows] = await db.query('SELECT * FROM rituals_and_offerings');
  return rows;
};

module.exports = {
  createRitualOffering,
  getAllRitualsOfferings
};
