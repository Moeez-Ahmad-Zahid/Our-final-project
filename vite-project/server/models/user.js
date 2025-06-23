const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Date : String,
   contact: String,
  image: String, // base64 image
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);
