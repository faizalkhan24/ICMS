const express = require('express');
const bodyParser = require('body-parser');

// Import route modules
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const examRoutes = require('./routes/examRoutes');
const parentPortalRoutes = require('./routes/parentPortalRoutes');
const classScheduleRoutes = require('./routes/classScheduleRoutes');
const distributionRoutes = require('./routes/distributionRoutes');
const donationRoutes = require('./routes/donationRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reportRoutes = require('./routes/reportRoutes');
const prayerRoutes = require('./routes/prayerRoutes');
const eventMasjidRoutes = require('./routes/eventMasjidRoutes');
const islamicEventRoutes = require('./routes/islamicEventRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const visitorRoutes = require('./routes/visitorRoutes');
const ritualsOfferingsRoutes = require('./routes/ritualsOfferingsRoutes');
const assetRoutes = require('./routes/assetRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const commentRoutes = require('./routes/commentRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Import middleware
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(bodyParser.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/parent-portal', parentPortalRoutes);
app.use('/api/class-schedules', classScheduleRoutes);
app.use('/api/distributions', distributionRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/prayers', prayerRoutes);
app.use('/api/events', eventMasjidRoutes);
app.use('/api/islamic-events', islamicEventRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/visitor', visitorRoutes);
app.use('/api/ritualsOfferings', ritualsOfferingsRoutes);
app.use('/api/asset', assetRoutes);
app.use('/api', discussionRoutes);
app.use('/api', commentRoutes);
app.use('/api', announcementRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', messageRoutes);

// Use error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
