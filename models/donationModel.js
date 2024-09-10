const db = require('../db');

const createDonation = async (donorName, amount, donationType, paymentMethod) => {
  if (!donorName || typeof donorName !== 'string' || donorName.trim() === '') {
    throw new Error('Invalid donor name');
  }

  if (isNaN(amount) || amount <= 0) {
    throw new Error('Amount must be a positive number');
  }

  const validDonationTypes = ['Zakat', 'Sadaqah', 'Other'];
  if (!donationType || !validDonationTypes.includes(donationType)) {
    throw new Error('Invalid donation type');
  }

  const validPaymentMethods = ['Online', 'Offline'];
  if (!paymentMethod || !validPaymentMethods.includes(paymentMethod)) {
    throw new Error('Invalid payment method');
  }

  try {
    const [result] = await db.query(
      'INSERT INTO donations (donor_name, amount, donation_type, payment_method, date) VALUES (?, ?, ?, ?, NOW())',
      [donorName, amount, donationType, paymentMethod]
    );
    return result.insertId;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to create donation. Please try again later.');
  }
};

const getAllDonations = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM donations');
    return rows;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to retrieve donations. Please try again later.');
  }
};

const getDonationById = async (id) => {
  if (isNaN(id) || id <= 0) {
    throw new Error('Invalid donation ID');
  }

  try {
    const [rows] = await db.query('SELECT * FROM donations WHERE id = ?', [id]);
    return rows[0] || null;
  } catch (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to retrieve donation. Please try again later.');
  }
};

module.exports = {
  createDonation,
  getAllDonations,
  getDonationById,
};
