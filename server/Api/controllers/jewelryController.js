// // server/controllers/jewelryController.js

// import Jewelry from '../models/jewelleryItem';

// export const createJewelry = async (req, res) => {
//   const { name, category, description, cost, editorName, image } = req.body;

//   try {
//     const newItem = new Jewelry({
//       name,
//       category,
//       description,
//       cost,
//       editorName,       
//       image,
//     });

//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Get all jewelry items
// export const getAllJewelry = async (req, res) => {
//   try {
//     const items = await Jewelry.find();
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Get single item by ID
// export const getJewelryById = async (req, res) => {
//   try {
//     const item = await Jewelry.findById(req.params.id);
//     if (!item) return res.status(404).json({ message: 'Item not found' });
//     res.status(200).json(item);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Get items by category
// export const getJewelryByCategory = async (req, res) => {
//   try {
//     const items = await Jewelry.find({ category: req.params.category });
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Delete item by ID
// export const deleteJewelry = async (req, res) => {
//   try {
//     await Jewelry.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };
