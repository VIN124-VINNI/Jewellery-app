
// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Thunk to create a new jewellery item
// // export const createJewellery = createAsyncThunk(
// //   'createJewellery/createJewellery',
// //   async (payload, { rejectWithValue }) => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("name", payload.name);
// //       formData.append("category", payload.category);
// //       formData.append("description", payload.description);
// //       formData.append("cost", payload.cost);
// //       formData.append("editorName", payload.editorName);
// //       formData.append("image", payload.image);

// //       const response = await axios.post("https://jewellery-app-wq8v.onrender.com/api/jewellery/jewelleryPost'", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data"
// //         },
// //         withCredentials: true
// //       });

// //       return response.data;
// //     } catch (error) {
// //       console.error("Redux error:", error.response?.data?.error || error.message);
// //       return rejectWithValue(error.response?.data?.error || "Server Error");
// //     }
// //   }
// // );
// // const createJewellerySlice = createSlice({
// //   name: 'createJewellery',
// //   initialState: {
// //     createdItem: null,       
// //     creating: false,         
// //     creationError: null,     
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(createJewellery.pending, (state) => {
// //         state.creating = true;
// //         state.creationError = null;
// //       })
// //       .addCase(createJewellery.fulfilled, (state, action) => {
// //         state.creating = false;
// //         state.createdItem = action.payload;
// //       })
// //       .addCase(createJewellery.rejected, (state, action) => {
// //         state.creating = false;
// //         state.creationError = action.payload;
// //       });
// //   },
// // });

// // export default createJewellerySlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunk to create a new jewellery item
// export const createJewellery = createAsyncThunk(
//   'createJewellery/createJewellery',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", payload.name);
//       formData.append("category", payload.category);
//       formData.append("description", payload.description);
//       formData.append("cost", payload.cost);
//       formData.append("editor", payload.editor); // ✅ Corrected from editorName
//       formData.append("image", payload.image);

//       const response = await axios.post("https://jewellery-app-wq8v.onrender.com/api/jewellery/jewelleryPost", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         },
//         withCredentials: true
//       });

//       return response.data;
//     } catch (error) {
//       console.error("Redux error:", error.response?.data?.error || error.message);
//       return rejectWithValue(error.response?.data?.error || "Server Error");
//     }
//   }
// );

// const createJewellerySlice = createSlice({
//   name: 'createJewellery',
//   initialState: {
//     createdItem: null,
//     creating: false,
//     creationError: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createJewellery.pending, (state) => {
//         state.creating = true;
//         state.creationError = null;
//       })
//       .addCase(createJewellery.fulfilled, (state, action) => {
//         state.creating = false;
//         state.createdItem = action.payload;
//       })
//       .addCase(createJewellery.rejected, (state, action) => {
//         state.creating = false;
//         state.creationError = action.payload;
//       });
//   },
// });

// export default createJewellerySlice.reducer;


// src/features/jewelry/createJewelery.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create Jewellery Thunk
export const createJewellery = createAsyncThunk(
  'createJewellery/createJewellery',
  async (payload, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", payload.name);
      formData.append("category", payload.category);
      formData.append("description", payload.description);
      formData.append("cost", payload.cost);
      formData.append("editor", payload.editor);
      formData.append("image", payload.image);

      const response = await axios.post("https://jewellery-app-wq8v.onrender.com/api/jewellery/jewelleryPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });

      return response.data;
    } catch (error) {
      console.error("Redux error:", error.response?.data?.message || error.message);
      return rejectWithValue(error.response?.data?.message || "Server Error");
    }
  }
);

const createJewellerySlice = createSlice({
  name: 'createJewellery',
  initialState: {
    createdItem: null,
    creating: false,
    creationError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createJewellery.pending, (state) => {
        state.creating = true;
        state.creationError = null;
      })
      .addCase(createJewellery.fulfilled, (state, action) => {
        state.creating = false;
        state.createdItem = action.payload;
      })
      .addCase(createJewellery.rejected, (state, action) => {
        state.creating = false;
        state.creationError = action.payload;
      });
  },
});

export default createJewellerySlice.reducer;
