const express = require('express');
const router = express.Router();
const { addDistribution, listDistributions, getDistribution } = require('../controllers/distributionController');

router.post('/distributions', addDistribution);
router.get('/distributions', listDistributions);
router.get('/distributions/:id', getDistribution);

module.exports = router;
