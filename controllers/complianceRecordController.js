const { body, validationResult } = require('express-validator');
const { createComplianceRecord, getAllComplianceRecords } = require('../models/complianceRecordModel');

const addComplianceRecord = [
  body('filingDate').isDate().withMessage('Invalid filing date'),
  body('complianceType').isIn(['tax', 'legal']).withMessage('Invalid compliance type'),
  body('amount').optional().isFloat({ gte: 0 }).withMessage('Amount must be a positive number'),
  body('description').optional().isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { filingDate, complianceType, amount, description } = req.body;
    try {
      const complianceId = await createComplianceRecord(filingDate, complianceType, amount, description);
      res.status(201).json({ message: 'Compliance record added', complianceId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add compliance record' });
    }
  }
];

const listComplianceRecords = async (req, res) => {
  try {
    const records = await getAllComplianceRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve compliance records' });
  }
};

module.exports = {
  addComplianceRecord,
  listComplianceRecords
};
