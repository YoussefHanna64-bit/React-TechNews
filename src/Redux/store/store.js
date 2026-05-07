import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import postReducer from "../slices/postSlice";
import themeReducer from "../slices/themeSlice";

const storeConfig = configureStore({
  reducer: {
    authR: authReducer,
    postsR: postReducer,
    themeR: themeReducer,
  },
});

export default storeConfig;
