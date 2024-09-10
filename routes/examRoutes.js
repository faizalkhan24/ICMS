const express = require('express');
const { addExam, listExams, getExam } = require('../controllers/examController');

const router = express.Router();

router.post('/exams', addExam); // Create a new exam
router.get('/exams', listExams); // Get all exams
router.get('/exams/:id', getExam); // Get an exam by ID

module.exports = router;
