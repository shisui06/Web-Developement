
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');; // Adjust the path if necessary
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

// User registration route and check for existing username
router.post('/register', async (req, res) => {
  const { name, username, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Username already exists'
      });
    }
    
    const newUser = new User({
      name,
      username,
      password,
      profile: 'user'
    });
    
    await newUser.save();
    return res.status(201).json({
      status: 'success',
      message: 'User registered successfully'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Registration failed'
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ 
        status: 'error',
        message: "Invalid username or password" 
      });
    }

    const token = jwt.sign(
      { userId: user._id, profile: user.profile }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    return res.status(200).json({
      status: 'success',
      token,
      message: 'Login successful'
    });
  } catch (err) {
    return res.status(500).json({ 
      status: 'error',
      message: 'Login failed' 
    });
  }
});

module.exports = router;