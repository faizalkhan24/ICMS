const db = require('../db');

const createFinancialReport = async (type, date, income, expenses) => {
  const query = 'INSERT INTO financial_reports (report_type, report_date, total_income, total_expenses) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(query, [type, date, income, expenses]);
  return result.insertId;
};

const getAllReports = async () => {
  const [rows] = await db.query('SELECT * FROM financial_reports');
  return rows;
};

module.exports = {
  createFinancialReport,
  getAllReports
};
