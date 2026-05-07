import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/posts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await axios.get(baseUrl);
  return res.data;
});

export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  try {
    const res = await axios.post(baseUrl, newPost);

    if (res.status === 201) {
      return res.data;
    }
    return null;
  } catch (e) {
    return null;
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    searchTitle: "",
  },
  reducers: {
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload.reverse();
    });

    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.unshift(action.payload);
    });
  },
});

export const { setSearchTitle } = postSlice.actions;
export default postSlice.reducer;
