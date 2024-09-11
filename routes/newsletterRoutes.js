const express = require('express');
const { addNewsletter, listNewsletters } = require('../controllers/newsletterController');
const router = express.Router();

router.post('/newsletters', addNewsletter);
router.get('/newsletters', listNewsletters);

module.exports = router;
