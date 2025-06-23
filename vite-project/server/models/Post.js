const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: String,
  startDate: Date,
  endDate: Date,
  category: String,
  cityArea: String,
  type: String,
  image: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post; // ✔️ must export like this
