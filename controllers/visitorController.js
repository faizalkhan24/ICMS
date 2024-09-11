const { createVisitor, getAllVisitors, getVisitorById } = require('../models/visitorModel');

const addVisitor = async (req, res) => {
  const { name, visitDate, guestType, contactInfo, notes } = req.body;
  try {
    const visitorId = await createVisitor(name, visitDate, guestType, contactInfo, notes);
    res.status(201).json({ message: 'Visitor added', visitorId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add visitor' });
  }
};

const listVisitors = async (req, res) => {
  try {
    const visitors = await getAllVisitors();
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve visitors' });
  }
};

module.exports = {
  addVisitor,
  listVisitors
};
