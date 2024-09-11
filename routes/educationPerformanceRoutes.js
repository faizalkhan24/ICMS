const express = require('express');
const { studentPerformance, courseCompletion } = require('../controllers/educationPerformanceController');
const router = express.Router();

router.get('/students/:studentId/performance', studentPerformance);
router.get('/courses/:courseId/completion', courseCompletion);

module.exports = router;
