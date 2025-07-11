// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";

// import UserReducer from '../features/user/userSlice'
import signupReducer from '../features/user/signupSlice'
import SingleReducer from '../features/jewelry/SingleProductSlice'
import deleteReducer from '../features/jewelry/DeleteSlice'
import AlldataReducer from '../features/jewelry/AlldataSlice'
// import jewelleryReducer from '../features/jewelry/Jewellery'
import createReducer from '../features/jewelry/createJewelery'
import loginReducer from '../features/user/loginSlice'
import RegisterReducer from '../features/user/signupSlice'
import CategoryReducer from '../features/jewelry/category'
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    delete: deleteReducer,
    Alldata:AlldataReducer,
    singleProduct: SingleReducer,
    // jewellery:alldataSlice,
    createslice:createReducer,
    login:loginReducer,
    register:RegisterReducer,
    category:CategoryReducer

  },
});
