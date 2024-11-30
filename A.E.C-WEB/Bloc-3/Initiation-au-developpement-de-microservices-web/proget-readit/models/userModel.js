const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true }, // Ensure usernames are unique
  password: String,
  profile: { type: String, default: 'user' }
});

module.exports = mongoose.model('User ', userSchema);