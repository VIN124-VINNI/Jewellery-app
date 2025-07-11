import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const EditJewellerySlice = createAsyncThunk(
  'jewellery/updateJewellery',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const updated = new FormData();
      updated.append('name', formData.name);
      updated.append('category', formData.category);
      updated.append('description', formData.description);
      updated.append('cost', formData.cost);
      if (formData.image) {
        updated.append('image', formData.image);
      }

      const res = await axios.put(
        `http://localhost:3000/api/jewellery/jewelleryPut/${id}`,
        updated,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error updating jewellery item');
    }
  }
);

const updateJewellerySlice = createSlice({
  name: 'jewelleryUpdate',
  initialState: {
    loading: false,
    error: null,
    successMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateJewellery.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updateJewellery.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = 'Jewellery item updated successfully!';
      })
      .addCase(updateJewellery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Update failed';
      });
  },
});

export default EditJewellerySlice.reducer;
