const { sendMessage, getMessagesBetweenUsers } = require('../models/messageModel');

const addMessage = async (req, res) => {
  const { senderId, receiverId, content } = req.body;
  try {
    const messageId = await sendMessage(senderId, receiverId, content);
    res.status(201).json({ message: 'Message sent', messageId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

const listMessages = async (req, res) => {
  const { senderId, receiverId } = req.params;
  try {
    const messages = await getMessagesBetweenUsers(senderId, receiverId);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};

module.exports = {
  addMessage,
  listMessages
};
