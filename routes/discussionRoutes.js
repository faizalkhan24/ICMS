const express = require('express');
const { addDiscussion, listDiscussions } = require('../controllers/discussionController');
const router = express.Router();

router.post('/discussions', addDiscussion);
router.get('/discussions', listDiscussions);

module.exports = router;
