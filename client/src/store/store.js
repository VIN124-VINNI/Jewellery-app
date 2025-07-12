// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";

// import UserReducer from '../features/user/userSlice'

import SingleReducer from '../features/jewelry/SingleProductSlice'
import deleteReducer from '../features/jewelry/DeleteSlice'
import AlldataReducer from '../features/jewelry/AlldataSlice'
// import jewelleryReducer from '../features/jewelry/Jewellery'
import createReducer from '../features/jewelry/createJewelery'
import CategoryReducer from '../features/jewelry/category'
import LoginReducer from '../features/user/loginSlice'
import signupReducer from '../features/user/signupSlice'
export const store = configureStore({
  reducer: {
  
    delete: deleteReducer,
    Alldata:AlldataReducer,
    singleProduct: SingleReducer,
    // jewellery:alldataSlice,
    createslice:createReducer,
    category:CategoryReducer,
     login:LoginReducer,
     signup:signupReducer
  },
});
 