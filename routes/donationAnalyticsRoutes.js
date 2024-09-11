const express = require('express');
const { donationSummary, donationsByMonth } = require('../controllers/donationAnalyticsController');
const router = express.Router();

router.get('/donations/summary', donationSummary);
router.get('/donations/monthly', donationsByMonth);

module.exports = router;
