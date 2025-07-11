
// const express = require('express');
// const multer = require('multer');
// const JewelleryItem = require("../../models/jewelleryItem.js"); // Assuming this is your model
// const cloudinary = require("../../../cloudinary.js");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const router = express.Router();

// // Cloudinary storage config
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'jewellery',
//     allowed_formats: ['jpg', 'jpeg', 'png'],
//     transformation: [{ width: 500, height: 500, crop: 'limit' }],
//   },
// });

// const upload = multer({ storage });

// // PUT route to update jewellery item
// router.put("/jewelleryPut/:id", upload.single('image'), async (req, res) => {
//   try {
//     const id  = req.params;
// console.log(id,'id')
//     // Fetch existing jewellery item
//     const existingItem = await JewelleryItem.findById(id);
//     if (!existingItem) {
//       return res.status(404).json({ message: "Jewellery item not found" });
//     }

//     // Extract values from request body
//     const {
//       name,
//       category,
//       description,
//       cost
//     } = req.body;

//     // Build update object using fallback to existing values
//     const updateData = {
//       name: name ?? existingItem.name,
//       category: category ?? existingItem.category,
//       description: description ?? existingItem.description,
//       cost: cost ?? existingItem.cost,
//       image: req.file?.path || existingItem.image
//     };

//     const updatedItem = await JewelleryItem.findByIdAndUpdate(id, updateData, { new: true });

//     res.status(200).json({
//       message: "Jewellery item updated successfully",
//       jewelleryItem: updatedItem
//     });

//   } catch (error) {
//     console.error("Error updating jewellery item:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;
const express = require('express');
const multer = require('multer');
const JewelleryItem = require("../../models/jewelleryItem.js");
const cloudinary = require("../../../cloudinary.js");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const router = express.Router();

// Cloudinary storage config
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'jewellery',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const upload = multer({ storage });

// PUT route to update jewellery item
router.put("/jewelleryPut/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params; // ✅ Corrected
    console.log(id, 'id');

    // Fetch existing jewellery item
    const existingItem = await JewelleryItem.findById(id);
    if (!existingItem) {
      return res.status(404).json({ message: "Jewellery item not found" });
    }

    // Extract values from request body
    const { name, category, description, cost } = req.body;

    // Build update object using fallback to existing values
    const updateData = {
      name: name ?? existingItem.name,
      category: category ?? existingItem.category,
      description: description ?? existingItem.description,
      cost: cost ?? existingItem.cost,
      image: req.file?.path || existingItem.image
    };

    const updatedItem = await JewelleryItem.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json({
      message: "Jewellery item updated successfully",
      jewelleryItem: updatedItem
    });

  } catch (error) {
    console.error("Error updating jewellery item:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
