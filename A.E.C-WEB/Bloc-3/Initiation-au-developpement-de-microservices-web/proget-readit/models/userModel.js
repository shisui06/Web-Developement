const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  profile: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

// Function to update a user's fields by ID
async function updateUserById(id, updateFields) {
  return await User.findByIdAndUpdate(id, updateFields, { new: true });
}

module.exports = { User, updateUserById };
