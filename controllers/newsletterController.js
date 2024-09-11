const { createNewsletter, getAllNewsletters } = require('../models/newsletterModel');

const addNewsletter = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newsletterId = await createNewsletter(title, content);
    res.status(201).json({ message: 'Newsletter created', newsletterId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create newsletter' });
  }
};

const listNewsletters = async (req, res) => {
  try {
    const newsletters = await getAllNewsletters();
    res.json(newsletters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve newsletters' });
  }
};

module.exports = {
  addNewsletter,
  listNewsletters
};
