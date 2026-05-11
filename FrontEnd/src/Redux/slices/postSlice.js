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

export const upvotePost = createAsyncThunk("posts/upvotePost", async (post) => {
  const myVotes = JSON.parse(localStorage.getItem("myVotes")) || {};
  const currentVote = myVotes[post.id];

  const isUpvote = currentVote === "up";
  const isDownvote = currentVote === "down";

  const updatedPost = {
    ...post,
    upvotes: isUpvote ? post.upvotes - 1 : (post.upvotes || 0) + 1,
    downvotes: isDownvote ? post.downvotes - 1 : post.downvotes || 0,
  };

  const res = await axios.patch(`${baseUrl}/${post.id}`, updatedPost);

  if (isUpvote) {
    delete myVotes[post.id];
  } else {
    myVotes[post.id] = "up";
  }
  localStorage.setItem("myVotes", JSON.stringify(myVotes));

  return res.data;
});

export const downvotePost = createAsyncThunk(
  "posts/downvotePost",
  async (post) => {
    const myVotes = JSON.parse(localStorage.getItem("myVotes")) || {};
    const currentVote = myVotes[post.id];

    const isUpvote = currentVote === "up";
    const isDownvote = currentVote === "down";

    const updatedPost = {
      ...post,
      downvotes: isDownvote ? post.downvotes - 1 : (post.downvotes || 0) + 1,
      upvotes: isUpvote ? post.upvotes - 1 : post.upvotes || 0,
    };

    const res = await axios.patch(`${baseUrl}/${post.id}`, updatedPost);

    if (isDownvote) {
      delete myVotes[post.id];
    } else {
      myVotes[post.id] = "down";
    }
    localStorage.setItem("myVotes", JSON.stringify(myVotes));

    return res.data;
  },
);

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

    builder.addCase(upvotePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    });

    builder.addCase(downvotePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    });
  },
});

export const { setSearchTitle } = postSlice.actions;
export default postSlice.reducer;
