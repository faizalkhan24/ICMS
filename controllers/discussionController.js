const { createDiscussion, getAllDiscussions } = require('../models/discussionModel');

const addDiscussion = async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const discussionId = await createDiscussion(title, content, authorId);
    res.status(201).json({ message: 'Discussion added', discussionId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add discussion' });
  }
};

const listDiscussions = async (req, res) => {
  try {
    const discussions = await getAllDiscussions();
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve discussions' });
  }
};

module.exports = {
  addDiscussion,
  listDiscussions
};
