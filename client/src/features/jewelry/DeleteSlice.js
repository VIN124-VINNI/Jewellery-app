import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to delete a jewellery item
export const deleteJewellery = createAsyncThunk(
  'jewellery/deleteJewellery',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/jewellery/delete/${id}`);
      return response.data; // expected: { message: '...', item: {...} }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete jewellery item');
    }
  }
);

// Slice
const deleteJewellerySlice = createSlice({
  name: 'deleteJewellery',
  initialState: {
    loading: false,
    successMessage: '',
    error: '',
  },
  reducers: {
    clearDeleteState: (state) => {
      state.loading = false;
      state.successMessage = '';
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteJewellery.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.successMessage = '';
      })
      .addCase(deleteJewellery.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || 'Deleted successfully';
      })
      .addCase(deleteJewellery.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Error deleting item';
      });
  }
});

export const { clearDeleteState } = deleteJewellerySlice.actions;
export default deleteJewellerySlice.reducer;
