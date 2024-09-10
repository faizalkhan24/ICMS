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

// Use error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
