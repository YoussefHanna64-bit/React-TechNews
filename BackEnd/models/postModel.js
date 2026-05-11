import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    article: {
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
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);
export default Post;
