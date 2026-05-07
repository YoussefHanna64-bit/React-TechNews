import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import postReducer from "../slices/postSlice";

const storeConfig = configureStore({
  reducer: {
    authR: authReducer,
    postsR: postReducer,
  },
});

export default storeConfig;
