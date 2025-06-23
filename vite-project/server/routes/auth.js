const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/login');

// 🔐 JWT Secret
router.post('/signup', async (req, res) => {
  const { name, email, password, date, contact, image } = req.body;
  if (!name || !email || !password || !date || !contact || !image) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, date, contact, image });
    await newUser.save();

    // Don’t send password back
    const userToSend = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      date: newUser.date,
      contact: newUser.contact,
      image: newUser.image,
    };

    res.status(201).json({ message: "User registered successfully", user: userToSend });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
   res.json({
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    // contact: user.contact,     // optional
    // birthDate: user.birthDate, // optional
    // image: user.image          // optional
  }
});

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

module.exports = router;

