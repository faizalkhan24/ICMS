const { getStudentPerformanceByParentId } = require('../models/parentPortalModel');

const getParentStudentPerformance = async (req, res) => {
  try {
    const performance = await getStudentPerformanceByParentId(req.params.parentId);
    res.json(performance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performance' });
  }
};

module.exports = {
  getParentStudentPerformance,
};
