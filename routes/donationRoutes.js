const express = require('express');
const router = express.Router();
const { addDonation, listDonations, getDonation } = require('../controllers/donationController');

router.post('/donations', addDonation);
router.get('/donations', listDonations);
router.get('/donations/:id', getDonation);

module.exports = router;
