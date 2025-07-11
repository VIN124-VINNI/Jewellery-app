// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../../models/user');

// const router = express.Router();

// // 🔹 Update User by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updates = req.body;

//     if (updates.password) {
//       updates.password = await bcrypt.hash(updates.password, 10);
//     }

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const User = require('../../models/user');

const router = express.Router();

// 🔹 Update User by ID (without bcrypt)
router.put('/:id', async (req, res) => {
  try {
    const updates = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    ).select('-password');

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

