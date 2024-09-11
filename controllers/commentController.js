const { createComment, getCommentsByDiscussionId } = require('../models/commentModel');

const addComment = async (req, res) => {
  const { discussionId, content, authorId } = req.body;
  try {
    const commentId = await createComment(discussionId, content, authorId);
    res.status(201).json({ message: 'Comment added', commentId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

const listComments = async (req, res) => {
  const { discussionId } = req.params;
  try {
    const comments = await getCommentsByDiscussionId(discussionId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};

module.exports = {
  addComment,
  listComments
};
