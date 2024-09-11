const { createRitualOffering, getAllRitualsOfferings } = require('../models/ritualsOfferingsModel');

const addRitualOffering = async (req, res) => {
  const { ritualName, description, offeringAmount, offeringDate } = req.body;
  try {
    const offeringId = await createRitualOffering(ritualName, description, offeringAmount, offeringDate);
    res.status(201).json({ message: 'Ritual/Offering added', offeringId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add ritual/offering' });
  }
};

const listRitualsOfferings = async (req, res) => {
  try {
    const ritualsOfferings = await getAllRitualsOfferings();
    res.json(ritualsOfferings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve rituals and offerings' });
  }
};

module.exports = {
  addRitualOffering,
  listRitualsOfferings
};
