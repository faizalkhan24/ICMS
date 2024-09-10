const { createClassSchedule, getAllSchedules } = require('../models/classScheduleModel');

const addClassSchedule = async (req, res) => {
  const { courseId, startTime, endTime } = req.body;
  try {
    const scheduleId = await createClassSchedule(courseId, startTime, endTime);
    res.status(201).json({ message: 'Class schedule created', scheduleId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create schedule' });
  }
};

const listSchedules = async (req, res) => {
  try {
    const schedules = await getAllSchedules();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve schedules' });
  }
};

module.exports = {
  addClassSchedule,
  listSchedules,
};
