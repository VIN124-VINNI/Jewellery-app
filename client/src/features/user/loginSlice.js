import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        'https://jewellery-app-wq8v.onrender.com/api/auth/login',
        credentials
      );

      // ✅ Store token
      // localStorage.setItem('token', res.data.token);
console.log(res,'gggggg')
      // ✅ Store userId in cookie
      Cookies.set('userId', res.data.user.id, { expires: 1 });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.success = false;
      localStorage.removeItem('token');
      Cookies.remove('userId'); // ✅ clear cookie on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
