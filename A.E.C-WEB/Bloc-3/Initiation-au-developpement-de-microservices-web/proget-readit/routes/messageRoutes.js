const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  // For password hashing
const User = require('../models/userModel'); // Import User model
const Message = require('../models/messageModel'); // Existing import
const router = express.Router();

// Middleware for authentication
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(403).send({ error: 'Token required' });

  jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
}


// ------------------ Existing Message Routes ------------------

// GET all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().populate('user');
    res.send(messages);
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve messages' });
  }
});

// Add a new message
router.post('/newMessage', authenticateToken, async (req, res) => {
  const { title, message } = req.body;
  if (!title || !message) {
    return res.status(400).send({ error: 'Title and message are required' });
  }

  const newMessage = new Message({
    title,
    message,
    user: req.user.userId
  });

  try {
    await newMessage.save();
    res.status(201).send({ status: 'ok', message: 'Message added successfully', data: newMessage });
  } catch (err) {
    res.status(400).send({ error: 'Error adding message' });
  }
});

// Search for messages
router.get('/search/:text', async (req, res) => {
  const searchText = req.params.text;
  try {
    const messages = await Message.find({
      $or: [
        { title: { $regex: searchText, $options: 'i' } },
        { message: { $regex: searchText, $options: 'i' } }
      ]
    }).limit(10);
    res.send(messages);
  } catch (err) {
    res.status(500).send({ error: 'Search failed' });
  }
});

// Delete a message (admin only)
router.delete('/deleteMessage/:id', authenticateToken, async (req, res) => {
  if (req.user.profile !== 'admin') return res.status(403).send({ error: 'Access denied' });

  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).send({ error: 'Message not found' });
    res.send({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete message' });
  }
});

module.exports = router;
