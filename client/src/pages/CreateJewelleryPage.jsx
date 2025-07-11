// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { createJewellery } from '../features/jewelry/createJewelery';
// import Navbar from '../components/Navbar/Navbar';

// function CreateJewellery() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     description: '',
//     cost: '',
//     editor: '',
//   });

//   const [imageFile, setImageFile] = useState(null);

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageFile) {
//       alert('Please select an image');
//       return;
//     }

//     try {
//       const payload = {
//         ...formData,
//         image: imageFile, // File gets appended inside the thunk
//       };

//       await dispatch(createJewellery(payload)).unwrap();

//       alert('Jewellery item added successfully!');
//       navigate('/AllData');
//     } catch (err) {
//       console.error('Redux error:', err);
//       alert('Error adding item');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-24">
//         <h1 className="text-2xl font-bold mb-4 text-center">Add New Jewellery</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Jewellery Name"
//             className="w-full border px-4 py-2 rounded"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="file"
//             onChange={imageHandler}
//             className="w-full border px-4 py-2 rounded"
//             accept="image/*"
//             required
//           />

//           <select
//             name="category"
//             className="w-full border px-4 py-2 rounded"
//             value={formData.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Necklace">Necklace</option>
//             <option value="Earrings">Earrings</option>
//             <option value="Rings">Rings</option>
//             <option value="Bracelets">Bracelets</option>
//             <option value="Bangles">Bangles</option>
//           </select>

//           <textarea
//             name="description"
//             placeholder="Description"
//             className="w-full border px-4 py-2 rounded h-32 resize-none"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <input
//             type="number"
//             name="cost"
//             placeholder="Cost (₹)"
//             className="w-full border px-4 py-2 rounded"
//             value={formData.cost}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="text"
//             name="editor"
//             placeholder="Editor Name"
//             className="w-full border px-4 py-2 rounded"
//             value={formData.editor}
//             onChange={handleChange}
//             required
//           />

//           <div className="flex justify-center mt-4">
//             <button
//               type="submit"
//               className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default CreateJewellery;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createJewellery } from '../features/jewelry/createJewelery';
import Navbar from '../components/Navbar/Navbar';

function CreateJewellery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    cost: '',
    editor: '',
  });

  const [imageFile, setImageFile] = useState(null);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert('Please select an image');

    try {
      const payload = {
        ...formData,
        image: imageFile,
      };

      await dispatch(createJewellery(payload)).unwrap();
      alert('Jewellery item added successfully!');
      navigate('/AllData');
    } catch (err) {
      alert('Error adding item: ' + err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-24">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Jewellery</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Jewellery Name" className="w-full border px-4 py-2 rounded" value={formData.name} onChange={handleChange} required />
          <input type="file" onChange={imageHandler} className="w-full border px-4 py-2 rounded" accept="image/*" required />
          <select name="category" className="w-full border px-4 py-2 rounded" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Necklace">Necklace</option>
            <option value="Earrings">Earrings</option>
            <option value="Rings">Rings</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Bangles">Bangles</option>
          </select>
          <textarea name="description" placeholder="Description" className="w-full border px-4 py-2 rounded h-32 resize-none" value={formData.description} onChange={handleChange} required />
          <input type="number" name="cost" placeholder="Cost (₹)" className="w-full border px-4 py-2 rounded" value={formData.cost} onChange={handleChange} required />
          <input type="text" name="editor" placeholder="Editor Name" className="w-full border px-4 py-2 rounded" value={formData.editor} onChange={handleChange} required />
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateJewellery;

