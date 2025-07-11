// Api/routes/getUserById.js
const express = require('express');
const User = require('../../models/user');

const router = express.Router();

// 🔹 GET - Get user by ID
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // remove password from result
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user by ID:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
