const express = require('express');
const router = express.Router();
const { generateFinancialReport } = require('../controllers/reportController');

router.get('/reports/financial', generateFinancialReport);

module.exports = router;
