const express = require('express');
const { addCourse, listCourses, getCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/course', addCourse); // Create a new course
router.get('/course', listCourses); // Get all courses
router.get('/course/:id', getCourse); // Get a course by ID

module.exports = router;
