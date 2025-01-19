const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, default: null },  // Allow null or empty passwords for Google users
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to hash password only if it's provided and modified
userSchema.pre('save', async function (next) {
  if (this.password && this.isModified('password')) {
    // Hash password if it's not null/empty and modified
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password (if provided)
userSchema.methods.comparePassword = async function (enteredPassword) {
  if (this.password) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
  return false; // If no password is set, return false
};

const User = mongoose.model("User", userSchema);

module.exports = User;
