
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    type: String,
    required: true,
  }
}, {
  collection: 'user', // Specify the collection name
  database: 'administration' // Specify the database name
});

module.exports = mongoose.model('User', userSchema);