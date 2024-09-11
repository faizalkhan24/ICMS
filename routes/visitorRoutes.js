const express = require('express');
const { addVisitor, listVisitors } = require('../controllers/visitorController');
const router = express.Router();

router.post('/visitors', addVisitor);
router.get('/visitors', listVisitors);

module.exports = router;
