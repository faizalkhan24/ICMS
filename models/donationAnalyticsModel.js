const db = require('../db');

const getDonationSummary = async () => {
  const [rows] = await db.query(`
    SELECT 
      SUM(amount) AS total_amount, 
      COUNT(*) AS total_donations, 
      AVG(amount) AS average_donation 
    FROM donations
  `);
  return rows[0];
};

const getDonationsByMonth = async () => {
  const [rows] = await db.query(`
    SELECT 
      DATE_FORMAT(donation_date, '%Y-%m') AS month, 
      SUM(amount) AS total_amount 
    FROM donations 
    GROUP BY month
  `);
  return rows;
};

module.exports = {
  getDonationSummary,
  getDonationsByMonth,
};
