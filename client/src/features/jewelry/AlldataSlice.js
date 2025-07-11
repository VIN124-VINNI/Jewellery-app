
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🔁 Async thunk to fetch all jewellery items
export const fetchJewelleryData = createAsyncThunk(
  'alldata/fetchJewelleryData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jewellery-app-wq8v.onrender.com/api/jewellery/getpost');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch jewellery data');
    }
  }
);

// ✅ Slice
const alldataSlice = createSlice({
  name: 'alldata',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: "", // 🔍 search query state added
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJewelleryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJewelleryData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchJewelleryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// 👉 Export actions and reducer
export const { setSearchQuery } = alldataSlice.actions;
export default alldataSlice.reducer;
