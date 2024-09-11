const { body, query, validationResult } = require('express-validator');
const { createExpense, getAllExpenses, getExpensesByDateRange } = require('../models/expenseModel');

const addExpense = [
  body('category').isIn(['maintenance', 'salary', 'utility', 'miscellaneous']).withMessage('Invalid category'),
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
  body('expenseDate').isDate().withMessage('Invalid date'),
  body('description').optional().isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { category, amount, description, expenseDate } = req.body;
    try {
      const expenseId = await createExpense(category, amount, description, expenseDate);
      res.status(201).json({ message: 'Expense added', expenseId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add expense' });
    }
  }
];

const listExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve expenses' });
  }
};

const listExpensesByDateRange = [
  query('startDate').isDate().withMessage('Invalid start date'),
  query('endDate').isDate().withMessage('Invalid end date'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { startDate, endDate } = req.query;
    try {
      const expenses = await getExpensesByDateRange(startDate, endDate);
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve expenses for the specified date range' });
    }
  }
];

module.exports = {
  addExpense,
  listExpenses,
  listExpensesByDateRange
};
