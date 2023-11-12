const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const emailRoutes = require('./routes/emailRoutes');
const authenticateUser = require('./middlewares/authenticateUser');

const app = express();

// Middleware for parsing JSON in request body
app.use(express.json());
app.use(bodyParser.json());

// Apply the authenticateUser middleware to the specified routes
app.use('/auth/admin', authenticateUser);
app.use('/auth/students', authenticateUser);
app.use('/auth/courses', authenticateUser);
app.use('/auth/roles', authenticateUser);
app.use('/auth/email', authenticateUser);

// Apply route handlers
app.use('/auth/admin', adminRoutes);
app.use('/auth/students', studentRoutes);
app.use('/auth/courses', courseRoutes);
app.use('/auth/roles', rolesRoutes);
app.use('/auth/email', emailRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
