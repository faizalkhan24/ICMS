const { createExam, getAllExams, getExamById } = require('../models/examModel');

const addExam = async (req, res) => {
  const { courseId, examDate, title } = req.body;
  try {
    const examId = await createExam(courseId, examDate, title);
    res.status(201).json({ message: 'Exam created', examId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create exam' });
  }
};

const listExams = async (req, res) => {
  try {
    const exams = await getAllExams();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve exams' });
  }
};

const getExam = async (req, res) => {
  try {
    const exam = await getExamById(req.params.id);
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve exam' });
  }
};

module.exports = {
  addExam,
  listExams,
  getExam,
};
