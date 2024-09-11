const express = require('express');
const { addExpense, listExpenses, listExpensesByDateRange } = require('../controllers/expenseController');
const router = express.Router();

router.post('/expenses', addExpense);
router.get('/expenses', listExpenses);
router.get('/expenses/date-range', listExpensesByDateRange);

module.exports = router;
