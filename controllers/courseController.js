const { createCourse, getAllCourses, getCourseById } = require('../models/courseModel');

const addCourse = async (req, res) => {
  const { name, description, teacherId } = req.body;
  try {
    const courseId = await createCourse(name, description, teacherId);
    res.status(201).json({ message: 'Course created', courseId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

const listCourses = async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve courses' });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course' });
  }
};

module.exports = {
  addCourse,
  listCourses,
  getCourse,
};
