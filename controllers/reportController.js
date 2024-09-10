const { getAllDonations } = require('../models/donationModel');
const { getAllDistributions } = require('../models/distributionModel');

const generateFinancialReport = async (req, res) => {
  try {
    // Retrieve data from the models
    const donations = await getAllDonations();
    const distributions = await getAllDistributions();

    // Calculate totals
    const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
    const totalDistributions = distributions.reduce((sum, distribution) => sum + distribution.amount, 0);

    // Generate report
    const report = {
      reportGeneratedAt: new Date().toISOString(),
      totalDonations,
      totalDistributions,
      donations,
      distributions,
    };

    res.json(report);
  } catch (error) {
    console.error('Error generating financial report:', error.message);
    res.status(500).json({ error: 'Failed to generate financial report. Please try again later.' });
  }
};

module.exports = {
  generateFinancialReport,
};
