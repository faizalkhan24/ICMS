const express = require('express');
const { generateReport, listReports } = require('../controllers/financialReportController');
const router = express.Router();

router.post('/reports', generateReport);
router.get('/reports', listReports);

module.exports = router;
