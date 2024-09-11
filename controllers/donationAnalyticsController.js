const { getDonationSummary, getDonationsByMonth } = require('../models/donationAnalyticsModel');

const donationSummary = async (req, res) => {
  try {
    const summary = await getDonationSummary();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve donation summary' });
  }
};

const donationsByMonth = async (req, res) => {
  try {
    const donations = await getDonationsByMonth();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve donations by month' });
  }
};

module.exports = {
  donationSummary,
  donationsByMonth,
};
