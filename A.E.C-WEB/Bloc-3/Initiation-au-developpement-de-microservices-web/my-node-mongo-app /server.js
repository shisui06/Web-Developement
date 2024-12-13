// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB with Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
