const db = require('../db');

const createComplianceRecord = async (filingDate, complianceType, amount, description) => {
  const query = 'INSERT INTO compliance_records (filing_date, compliance_type, amount, description) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(query, [filingDate, complianceType, amount, description]);
  return result.insertId;
};

const getAllComplianceRecords = async () => {
  const [rows] = await db.query('SELECT * FROM compliance_records');
  return rows;
};

module.exports = {
  createComplianceRecord,
  getAllComplianceRecords
};
