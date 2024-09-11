const express = require('express');
const { addComplianceRecord, listComplianceRecords } = require('../controllers/complianceRecordController');
const router = express.Router();

router.post('/compliance', addComplianceRecord);
router.get('/compliance', listComplianceRecords);

module.exports = router;
