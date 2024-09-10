const express = require('express');
const { addClassSchedule, listSchedules } = require('../controllers/classScheduleController');

const router = express.Router();

router.post('/addclassschedule', addClassSchedule); // Create a new class schedule
router.get('/getclassschedule', listSchedules); // Get all class schedules

module.exports = router;
