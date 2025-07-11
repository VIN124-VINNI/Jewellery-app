import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EditJewellerySlice } from '../features/jewelry/editSlice';

function UpdateJewellery() {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    cost: '',
    editor: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (state) {
      setFormData({
        name: state.name,
        category: state.category,
        description: state.description,
        cost: state.cost,
        editor: state.editor,
        image: null,
      });
      setPreviewImage(state.image);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(EditJewellerySlice({ id, formData })).unwrap();
      alert("Jewellery item updated successfully");
      navigate('/');
    } catch (error) {
      console.error("Update error:", error);
      alert("Update failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      {previewImage && (
        <img
          src={previewImage}
          alt="Jewellery"
          className="w-full h-52 object-cover rounded border shadow"
        />
      )}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Jewellery Name"
        className="border p-2 w-full"
        required
      />

      <select
        name="category"
        className="w-full border px-4 py-2 rounded"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Necklace">Necklace</option>
        <option value="Earrings">Earrings</option>
        <option value="Bracelet">Bracelet</option>
        <option value="Rings">Rings</option>
      </select>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 w-full resize-none"
        required
      />

      <input
        type="number"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
        className="border p-2 w-full"
        required
      />

      <input
        type="text"
        name="editor"
        value={formData.editor}
        onChange={handleChange}
        placeholder="Editor Name"
        className="border p-2 w-full"
        required
      />

      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Jewellery
      </button>
    </form>
  );
}

export default UpdateJewellery;
