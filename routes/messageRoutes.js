const express = require('express');
const { addMessage, listMessages } = require('../controllers/messageController');
const router = express.Router();

router.post('/messages', addMessage);
router.get('/messages/:senderId/:receiverId', listMessages);

module.exports = router;
