// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // 🔁 Async thunk to fetch all jewellery
// export const fetchJewelleryByCategory = createAsyncThunk(
//   'category/fetchJewelleryByCategory',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/jewellery/getpost');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch jewellery data');
//     }
//   }
// );

// const categorySlice = createSlice({
//   name: 'category',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//     selectedCategory: 'All',
//   },
//   reducers: {
//     setCategory: (state, action) => {
//       state.selectedCategory = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJewelleryByCategory.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchJewelleryByCategory.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchJewelleryByCategory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setCategory } = categorySlice.actions;
// export default categorySlice.reducer;


// src/features/category/categorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🔁 Async thunk to fetch jewellery from the backend
export const fetchJewelleryByCategory = createAsyncThunk(
  'category/fetchJewelleryByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/jewellery/getpost');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch jewellery data'
      );
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: 'All',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJewelleryByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJewelleryByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchJewelleryByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
