const db = require('../db');

const createAsset = async (assetName, assetType, value, description, acquiredDate) => {
  const query = 'INSERT INTO assets (asset_name, asset_type, value, description, acquired_date) VALUES (?, ?, ?, ?, ?)';
  const [result] = await db.query(query, [assetName, assetType, value, description, acquiredDate]);
  return result.insertId;
};

const getAllAssets = async () => {
  const [rows] = await db.query('SELECT * FROM assets');
  return rows;
};

module.exports = {
  createAsset,
  getAllAssets
};
