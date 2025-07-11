import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleJewellery = createAsyncThunk(
  'jewellery/fetchSingleJewellery',
  async (id, { rejectWithValue }) => {
    console.log(id)
    try {
      const res = await axios.get(`http://localhost:3000/api/jewellery/jewelleryGet/${id}`);
      console.log(res.data)
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch jewellery item");
    }
  }
);

const singleJewellerySlice = createSlice({
  name: 'singleJewellery',
  initialState: {
    singleProduct: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSingleJewellery.pending, state => {
        state.loading = true;
        // state.singleProduct = null;
      })
      .addCase(fetchSingleJewellery.fulfilled, (state, action) => {
        state.loading = false;
        state.singleJewellery = action.payload;
      })
      .addCase(fetchSingleJewellery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default singleJewellerySlice.reducer;
