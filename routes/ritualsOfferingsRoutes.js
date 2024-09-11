const express = require('express');
const { addRitualOffering, listRitualsOfferings } = require('../controllers/ritualsOfferingsController');
const router = express.Router();

router.post('/rituals-offerings', addRitualOffering);
router.get('/rituals-offerings', listRitualsOfferings);

module.exports = router;
