// // const express = require('express');
// // const bcrypt = require('bcryptjs');
// // const User = require('../../models/user');

// // const router = express.Router();

// // // 🔹 Register User
// // router.post('/register', async (req, res) => {
// //   try {
// //     const { username, email, password } = req.body;

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({ username, email, password: hashedPassword });

// //     await newUser.save();
// //     res.status(201).json({ message: 'User registered successfully', user: newUser });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

const express = require('express');
const User = require('../../models/user'); // adjust path if needed

const router = express.Router();

// 🔹 Register User (without bcrypt)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Save user with plain password (⚠️ not secure for real apps)
    const newUser = new User({
      username,
      email,
      password // plain text
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

