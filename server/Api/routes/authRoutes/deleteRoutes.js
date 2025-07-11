const express = require('express');
const JewelleryItem = require('../../models/jewelleryItem');

const router = express.Router();

// 🔹 DELETE Jewellery Item by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedItem = await JewelleryItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Jewellery item not found' });

    res.status(200).json({ message: 'Jewellery item deleted successfully', item: deletedItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

