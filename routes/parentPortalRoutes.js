const express = require('express');
const { getParentStudentPerformance } = require('../controllers/parentPortalController');

const router = express.Router();

router.get('/parents/:parentId', getParentStudentPerformance); // Get student performance by parent ID

module.exports = router;
