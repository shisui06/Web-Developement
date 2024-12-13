const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  
const User = require('../models/userModel'); 
const Message = require('../models/messageModel'); 
const router = express.Router();


function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(403).send({ error: 'Token required' });

  jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().populate('user');
    res.send(messages);
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve messages' });
  }
});


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
