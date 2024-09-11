const express = require('express');
const { addComment, listComments } = require('../controllers/commentController');
const router = express.Router();

router.post('/comments', addComment);
router.get('/comments/:discussionId', listComments);

module.exports = router;
