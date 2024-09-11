const { getStudentPerformance, getCourseCompletion } = require('../models/educationPerformanceModel');

const studentPerformance = async (req, res) => {
  try {
    const performance = await getStudentPerformance(req.params.studentId);
    res.json(performance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performance' });
  }
};

const courseCompletion = async (req, res) => {
  try {
    const completion = await getCourseCompletion(req.params.courseId);
    res.json(completion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course completion data' });
  }
};

module.exports = {
  studentPerformance,
  courseCompletion,
};
