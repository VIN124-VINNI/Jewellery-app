
// // // const express = require('express');
// // // const multer = require('multer');
// // // const JewelleryItem = require("../../models/jewelleryItem.js");
// // // const cloudinary = require("../../../cloudinary.js");
// // // const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // // const router = express.Router();

// // // const storage = new CloudinaryStorage({
// // //   cloudinary: cloudinary,
// // //   params: {
// // //     folder: 'jewellery',
// // //     allowed_formats: ['jpg', 'jpeg', 'png'],
// // //     transformation: [{ width: 500, height: 500, crop: 'limit' }],
// // //   },
// // // });

// // // const upload = multer({ storage });

// // // // POST route to create jewellery item
// // // router.post("/jewelleryPost", upload.single('image'), async (req, res) => {
// // //   try {
// // //     const { name, category, description, cost } = req.body;

// // //     // Validate required fields (optional)
// // //     if (!name || !category || !description || !cost) {
// // //       return res.status(400).json({ message: "Please provide all required fields" });
// // //     }

// // //     // Check image uploaded
// // //     if (!req.file || !req.file.path) {
// // //       return res.status(400).json({ message: "Image upload failed" });
// // //     }

// // //     const newItem = new JewelleryItem({
// // //       name,
// // //       category,
// // //       description,
// // //       cost,
// // //       image: req.file.path // Cloudinary URL
// // //     });

// // //     await newItem.save();

// // //     res.status(201).json({
// // //       message: "Jewellery item created successfully",
// // //       jewelleryItem: newItem
// // //     });
// // //   } catch (error) {
// // //     console.error("Error creating jewellery item:", error);
// // //     res.status(500).json({ message: "Internal server error" });
// // //   }
// // // });

// // // module.exports = router;

// // const express = require('express');
// // const multer = require('multer');
// // const JewelleryItem = require("../../models/jewelleryItem.js");
// // const cloudinary = require("../../../cloudinary.js");
// // const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // const router = express.Router();

// // // Cloudinary storage config
// // const storage = new CloudinaryStorage({
// //   cloudinary: cloudinary,
// //   params: {
// //     folder: 'jewellery',
// //     allowed_formats: ['jpg', 'jpeg', 'png'],
// //     transformation: [{ width: 500, height: 500, crop: 'limit' }],
// //   },
// // });

// // const upload = multer({ storage });

// // // POST route to create jewellery item
// // router.post("/jewelleryPost", upload.single('image'), async (req, res) => {
// //   try {
// //     console.log('Request body:', req.body);
// //     console.log('Uploaded file:', req.file);

// //     const { name, category, description, cost, editor } = req.body;

// //     if (!req.file || !req.file.path) {
// //       return res.status(400).json({ message: "Image upload failed" });
// //     }

// //     if (!editor) {
// //       return res.status(400).json({ message: "Editor field is required" });
// //     }

// //     const newItem = new JewelleryItem({
// //       name,
// //       category,
// //       description,
// //       cost,
// //       editor,
// //       image: req.file.path // Cloudinary image URL
// //     });

// //     await newItem.save();

// //     res.status(201).json({
// //       message: "Jewellery item created successfully",
// //       jewelleryItem: newItem
// //     });
// //   } catch (error) {
// //     console.error("Error creating jewellery item:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const JewelleryItem = require("../../models/jewelleryItem.js");
// const cloudinary = require("../../../cloudinary.js");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const router = express.Router();

// // ✅ Cloudinary storage configuration
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'jewellery',
//     allowed_formats: ['jpg', 'jpeg', 'png'],
//     transformation: [{ width: 500, height: 500, crop: 'limit' }],
//   },
// });

// const upload = multer({ storage });

// // ✅ POST route to create jewellery item
// router.post("/jewelleryPost", upload.single('image'), async (req, res) => {
//   try {
//     console.log('Incoming Body:', req.body);
//     console.log('Incoming File:', req.file);

//     const { name, category, description, cost, editor } = req.body;

//     // Validate fields
//     if (!name || !category || !description || !cost || !editor) {
//       return res.status(400).json({ message: "All fields including 'editor' are required" });
//     }

//     if (!req.file || !req.file.path) {
//       return res.status(400).json({ message: "Image upload failed" });
//     }

//     const newItem = new JewelleryItem({
//       name,
//       category,
//       description,
//       cost,
//       editor,
//       image: req.file.path
//     });

//     await newItem.save();

//     res.status(201).json({
//       message: "Jewellery item created successfully",
//       item: newItem
//     });
//   } catch (error) {
//     console.error("Error creating jewellery item:", error);
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

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'jewellery',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const upload = multer({ storage });

router.post("/jewelleryPost", upload.single('image'), async (req, res) => {
  try {
    const { name, category, description, cost, editor } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    if (!editor) {
      return res.status(400).json({ message: "Editor field is required" });
    }

    const newItem = new JewelleryItem({
      name,
      category,
      description,
      cost,
      editor,
      image: req.file.path
    });

    await newItem.save();

    res.status(201).json({
      message: "Jewellery item created successfully",
      item: newItem
    });
  } catch (error) {
    console.error("Error creating jewellery item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
