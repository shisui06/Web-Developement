const express = require('express');
const mongoose = require('./config/db');
const User = require('./models/userModel');
const Message = require('./models/messageModel');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const path = require('path'); // Import path module

const app = express();
const PORT = 82;

// Middleware
app.use(express.json());

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the ReadIt API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port 82`);
});

// Remove this duplicate line
