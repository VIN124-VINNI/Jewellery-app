
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🔹 Thunk for Registering User
export const registerUser = createAsyncThunk(
  'signup/registerUser',
  async (userData, { rejectWithValue }) => {
    console.log(userData,'sdjfhsdf')

    const payload={
      username:userData.name,
      email:userData.email,
      password:userData.password
    }
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  }
);

// 🔹 Slice
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
