const { createStudent, getAllStudents, getStudentById } = require('../models/studentModel');

const addStudent = async (req, res) => {
  const { name, age, enrollmentDate, parentId } = req.body;
  try {
    const studentId = await createStudent(name, age, enrollmentDate, parentId);
    res.status(201).json({ message: 'Student enrolled', studentId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to enroll student' });
  }
};

const listStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
  }
};

module.exports = {
  addStudent,
  listStudents,
  getStudent,
};
