import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const registerUser = createAsyncThunk(
  'signup/registerUser',
  async (userData, { rejectWithValue }) => {
    const payload = {
      username: userData.name,
      email: userData.email,
      password: userData.password
    };

    try {
      const res = await axios.post(
        'https://jewellery-app-wq8v.onrender.com/api/auth/register',
        payload
      );

      // ✅ Store userId in cookie (1 day)
      Cookies.set('userId', res.data.user._id, { expires: 1 });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null,
    success: false,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default signupSlice.reducer;
