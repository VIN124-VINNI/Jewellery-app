
const express = require('express');
const JewelleryItem = require('../../models/jewelleryItem');

const router = express.Router();


// 🔹 GET - Fetch all jewellery items
router.get('/getpost', async (req, res) => {
  try {
    const items = await JewelleryItem.find().sort({ createdAt: -1 }); // most recent first
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching jewellery items:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
