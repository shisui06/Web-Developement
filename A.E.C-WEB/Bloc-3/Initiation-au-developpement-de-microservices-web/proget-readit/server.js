require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messageRoutes'); 
const userRoutes = require('./routes/userRoutes'); 
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

// MongoDB connection string pointing to the "administration" database
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/administration';

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
}).then(() => {
  console.log('Successfully connected to MongoDB (administration database)');
}).catch((err) => {
  console.error('MongoDB Connection Error:', err);
  console.error('Connection Details:');
  console.error('- Hostname:', err.hostname);
  console.error('- Error Code:', err.code);
  console.error('- Syscall:', err.syscall);
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

// API routes
app.use('/api/user', userRoutes);
app.use('/api/messages', messageRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the ReadIt API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
