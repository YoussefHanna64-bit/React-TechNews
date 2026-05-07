import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const res = await axios.get(`${baseUrl}?email=${user.email}`);

    if (res.data.length > 0) {
      const usr = res.data[0];
      if (usr.password === user.password) {
        localStorage.setItem("currentUser", JSON.stringify(usr));
        return usr;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
});

export const signup = createAsyncThunk("auth/signup", async (user) => {
  try {
    const res = await axios.post(baseUrl, user);
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    return res.data;
  } catch (e) {
    return null;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null,
  },

  reducers: {
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
