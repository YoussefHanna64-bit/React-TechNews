import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import postReducer from "../slices/postSlice";
import themeReducer from "../slices/themeSlice";
import i18nReducer from "../slices/i18nSlice";

const storeConfig = configureStore({
  reducer: {
    authR: authReducer,
    postsR: postReducer,
    themeR: themeReducer,
    i18nR: i18nReducer,
  },
});

export default storeConfig;
