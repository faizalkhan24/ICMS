const express = require('express');
const { addAsset, listAssets } = require('../controllers/assetController');
const router = express.Router();

router.post('/assets', addAsset);
router.get('/assets', listAssets);

module.exports = router;
