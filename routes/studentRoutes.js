const express = require('express');
const { addStudent, listStudents, getStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/students', addStudent);
router.get('/students', listStudents);
router.get('/students/:id', getStudent);

module.exports = router;
