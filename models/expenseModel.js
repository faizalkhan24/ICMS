const db = require('../db');

const createExpense = async (category, amount, description, expenseDate) => {
  const query = 'INSERT INTO expenses (expense_category, amount, description, expense_date) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(query, [category, amount, description, expenseDate]);
  return result.insertId;
};

const getAllExpenses = async () => {
  const [rows] = await db.query('SELECT * FROM expenses');
  return rows;
};

const getExpensesByDateRange = async (startDate, endDate) => {
  const query = 'SELECT * FROM expenses WHERE expense_date BETWEEN ? AND ?';
  const [rows] = await db.query(query, [startDate, endDate]);
  return rows;
};

module.exports = {
  createExpense,
  getAllExpenses,
  getExpensesByDateRange
};
