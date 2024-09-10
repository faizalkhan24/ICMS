const { createDonation, getAllDonations, getDonationById } = require('../models/donationModel');

const addDonation = async (req, res) => {
  const { donorName, amount, donationType, paymentMethod } = req.body;

  // Basic input validation
  if (!donorName || !amount || !donationType || !paymentMethod) {
    return res.status(400).json({ error: 'All fields (donorName, amount, donationType, paymentMethod) are required' });
  }

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  try {
    const donationId = await createDonation(donorName, amount, donationType, paymentMethod);
    res.status(201).json({ message: 'Donation recorded successfully', donationId });
  } catch (error) {
    console.error('Error recording donation:', error.message);
    res.status(500).json({ error: 'Failed to record donation. Please try again later.' });
  }
};

const listDonations = async (req, res) => {
  try {
    const donations = await getAllDonations();
    res.json(donations);
  } catch (error) {
    console.error('Error retrieving donations:', error.message);
    res.status(500).json({ error: 'Failed to retrieve donations. Please try again later.' });
  }
};

const getDonation = async (req, res) => {
  const { id } = req.params;

  // Basic input validation
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Valid donation ID is required' });
  }

  try {
    const donation = await getDonationById(id);
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.json(donation);
  } catch (error) {
    console.error('Error retrieving donation:', error.message);
    res.status(500).json({ error: 'Failed to retrieve donation. Please try again later.' });
  }
};

module.exports = {
  addDonation,
  listDonations,
  getDonation,
};
