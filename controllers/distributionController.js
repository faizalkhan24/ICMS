const {
  createDistribution,
  getAllDistributions,
  getDistributionById,
} = require("../models/distributionModel");

const addDistribution = async (req, res) => {
  const { beneficiaryName, amount, distributionDate } = req.body;

  // Input validation
  if (!beneficiaryName || typeof beneficiaryName !== 'string' || beneficiaryName.trim() === '') {
    return res.status(400).json({ error: 'Beneficiary name is required and must be a non-empty string' });
  }

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  const parsedDate = new Date(distributionDate);
  if (isNaN(parsedDate.getTime()) || parsedDate > new Date()) {
    return res.status(400).json({ error: 'Invalid distribution date or date is in the future' });
  }

  try {
    const distributionId = await createDistribution(beneficiaryName, amount, distributionDate);
    res.status(201).json({ message: 'Distribution recorded successfully', distributionId });
  } catch (error) {
    console.error('Error recording distribution:', error.message);
    res.status(500).json({ error: 'Failed to record distribution. Please try again later.' });
  }
};

const listDistributions = async (req, res) => {
  try {
    const distributions = await getAllDistributions();
    res.json(distributions);
  } catch (error) {
    console.error('Error retrieving distributions:', error.message);
    res.status(500).json({ error: 'Failed to retrieve distributions. Please try again later.' });
  }
};

const getDistribution = async (req, res) => {
  const { id } = req.params;

  // Input validation
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'Valid distribution ID is required' });
  }

  try {
    const distribution = await getDistributionById(id);
    if (!distribution) {
      return res.status(404).json({ error: 'Distribution not found' });
    }
    res.json(distribution);
  } catch (error) {
    console.error('Error retrieving distribution:', error.message);
    res.status(500).json({ error: 'Failed to retrieve distribution. Please try again later.' });
  }
};

module.exports = {
  addDistribution,
  listDistributions,
  getDistribution,
};
