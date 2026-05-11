import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);
export default Post;
