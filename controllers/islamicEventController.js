const axios = require('axios');

const getIslamicEvents = async (req, res) => {
  try {
    // Fetch Hijri calendar events using a third-party API
    const response = await axios.get('https://api.aladhan.com/v1/gToH', {
      params: {
        date: new Date().toISOString().split('T')[0], // Get current date in yyyy-mm-dd format
      },
    });

    const islamicEvents = response.data.data.hijri.holidays;
    res.json(islamicEvents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Islamic events' });
  }
};

module.exports = { getIslamicEvents };
