const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messageRoutes'); // Ensure this file exists
const userRoutes = require('./routes/userRoutes'); // Ensure this file exists
const path = require('path');

const app = express();
const PORT = process.env.PORT || 82;

// Middleware
app.use(cors());
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

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/readit', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port 82`);
});