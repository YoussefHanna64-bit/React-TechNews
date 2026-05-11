import { createSlice } from "@reduxjs/toolkit";

const i18nSlice = createSlice({
  name: "i18n",
  initialState: {
    language: localStorage.getItem("language") || "en",
  },
  reducers: {
    toggleLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language);
    },
  },
});

export const { toggleLanguage } = i18nSlice.actions;
export default i18nSlice.reducer;
