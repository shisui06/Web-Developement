const express = require('express');
const jwt = require('jsonwebtoken');// User login
const router = express.Router();
const User = require('../models/userModel');






router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ 
        status: 'error',
        message: "Nom d'utilisateur ou mot de passe incorrect" 
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
      message: 'Connexion réussie'
    });
    
  } catch (err) {
    return res.status(500).json({ 
      status: 'error',
      message: 'Erreur de connexion' 
    });
  }
});
async function login(username, password) {
  try {
    const response = await fetch('http://localhost:82/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Handle successful login
    console.log(data.message);
    // Store the token, update UI, etc.

  } catch (error) {
    console.error('Login error:', error.message);
    // Handle the error (show message to user, etc.)
  }
}

const User = require('../models/userModel');
const router = express.Router();

const JWT_SECRET = 'secret_key';

// User registration
router.post('/register', async (req, res) => {
  const { name, username, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Username already exists'
      });
    }
    
    // Create new user
    const newUser = new User({
      name,
      username,
      password,
      profile: 'user' // Default profile
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

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ 
        message: "Nom d'utilisateur ou mot de passe incorrect" 
      });
    }

    const token = jwt.sign(
      { userId: user._id, profile: user.profile }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    return res.status(200).json({
      token,
      message: 'Connexion réussie'
    });
    
  } catch (err) {
    return res.status(500).json({ 
      message: 'Erreur de connexion' 
    });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/register', async (req, res) => {
  const { name, username, password } = req.body;
  
  try {
    const newUser = new User({
      name,
      username,
      password,
      profile: 'user'
    });
    
    await newUser.save();
    res.status(201).json({ status: 'ok', message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

module.exports = router;