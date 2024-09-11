const express = require('express');
const { addAnnouncement, listAnnouncements } = require('../controllers/announcementController');
const router = express.Router();

router.post('/announcements', addAnnouncement);
router.get('/announcements', listAnnouncements);

module.exports = router;
