const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please tell us your lastname!'],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please provide your email!'],
    unique: [true],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid e-mail.'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
