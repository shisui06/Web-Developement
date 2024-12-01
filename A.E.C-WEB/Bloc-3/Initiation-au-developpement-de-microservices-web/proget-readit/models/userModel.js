
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  profile: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
