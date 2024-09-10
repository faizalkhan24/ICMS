const db = require('../db');

const createDistribution = async (beneficiaryName, amount, distributionDate) => {
  // Validate beneficiary name
  if (!beneficiaryName || typeof beneficiaryName !== 'string' || beneficiaryName.trim() === '') {
    throw new Error('Invalid beneficiary name');
  }

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    throw new Error('Amount must be a positive number');
  }

  // Validate distribution date
  if (new Date(distributionDate) > new Date()) {
    throw new Error('Distribution date cannot be in the future');
  }

  const [result] = await db.query(
    'INSERT INTO distributions (beneficiary_name, amount, distribution_date) VALUES (?, ?, ?)',
    [beneficiaryName, amount, distributionDate]
  );

  return result.insertId;
};

const getAllDistributions = async () => {
  const [rows] = await db.query('SELECT * FROM distributions');
  return rows;
};

const getDistributionById = async (id) => {
  // Validate ID
  if (isNaN(id) || id <= 0) {
    throw new Error('Invalid distribution ID');
  }

  const [rows] = await db.query('SELECT * FROM distributions WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  createDistribution,
  getAllDistributions,
  getDistributionById,
};
