const axios = require('axios');

const getPrayerTimes = async (req, res) => {
  const { city, country } = req.query; // Example: ?city=Mecca&country=Saudi Arabia
  
  try {
    const response = await axios.get(`${process.env.ALADHAN_API_URL}/timingsByCity`, {
      params: {
        city,
        country,
        method: 2, // Method for calculating prayer times (ISNA, MWL, etc.)
      },
    });
    
    const prayerTimes = response.data.data.timings;
    res.json(prayerTimes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prayer times' });
  }
};

module.exports = { getPrayerTimes };
