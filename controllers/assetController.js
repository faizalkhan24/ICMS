const { createAsset, getAllAssets } = require('../models/assetModel');

const addAsset = async (req, res) => {
  const { assetName, assetType, value, description, acquiredDate } = req.body;
  try {
    const assetId = await createAsset(assetName, assetType, value, description, acquiredDate);
    res.status(201).json({ message: 'Asset added', assetId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add asset' });
  }
};

const listAssets = async (req, res) => {
  try {
    const assets = await getAllAssets();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve assets' });
  }
};

module.exports = {
  addAsset,
  listAssets
};
