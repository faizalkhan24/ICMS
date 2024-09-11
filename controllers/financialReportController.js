const { body, validationResult } = require('express-validator');
const { createFinancialReport, getAllReports } = require('../models/financialReportModel');

const generateReport = [
  body('type').isIn(['monthly', 'yearly']).withMessage('Invalid report type'),
  body('date').isDate().withMessage('Invalid report date'),
  body('income').isFloat({ gte: 0 }).withMessage('Income must be a positive number'),
  body('expenses').isFloat({ gte: 0 }).withMessage('Expenses must be a positive number'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { type, date, income, expenses } = req.body;
    try {
      const reportId = await createFinancialReport(type, date, income, expenses);
      res.status(201).json({ message: 'Financial report generated', reportId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate financial report' });
    }
  }
];

const listReports = async (req, res) => {
  try {
    const reports = await getAllReports();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve financial reports' });
  }
};

module.exports = {
  generateReport,
  listReports
};
