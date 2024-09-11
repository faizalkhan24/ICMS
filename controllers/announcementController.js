const { createAnnouncement, getAllAnnouncements } = require('../models/announcementModel');

const addAnnouncement = async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const announcementId = await createAnnouncement(title, content, authorId);
    res.status(201).json({ message: 'Announcement created', announcementId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create announcement' });
  }
};

const listAnnouncements = async (req, res) => {
  try {
    const announcements = await getAllAnnouncements();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve announcements' });
  }
};

module.exports = {
  addAnnouncement,
  listAnnouncements
};
