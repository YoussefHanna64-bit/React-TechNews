import Post from "../models/postModel.js";
import { createError } from "../middleware/errorHandling.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "-_id userName");

  res.status(200).json({ success: true, posts });
};

export const getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.user.id }).populate(
    "user",
    "-_id userName",
  );

  res.status(200).json({ success: true, posts });
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("user", "-_id userName");

  if (!post) {
    throw createError(404, "Post not found");
  }

  res.status(200).json({ success: true, post });
};

export const createPost = async (req, res) => {
  const { title, description, article, category, imageURL } = req.body;

  if (!title || !description || !article || !category) {
    throw createError(
      400,
      "Title, description, article, and category fields are required",
    );
  }

  const post = await Post.create({
    user: req.user.id,
    title,
    description,
    article,
    category,
    imageURL,
  });

  res.status(201).json({ success: true, post });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOneAndUpdate(
    { _id: id, user: req.user.id },
    { $set: req.body },
    { returnDocument: "after" },
  );

  if (!post) {
    throw createError(404, "Post not found");
  }

  res.status(200).json({ success: true, post });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOneAndDelete({
    _id: id,
    user: req.user.id,
  });

  if (!post) {
    throw createError(404, "Post not found");
  }

  res.status(200).json({ success: true, message: "Post deleted successfully" });
};
