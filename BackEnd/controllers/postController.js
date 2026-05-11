import Post from "../models/postModel.js";
import { createError } from "../middleware/errorHandling.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find();

  res.status(200).json({ success: true, posts });
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
    title,
    description,
    article,
    category,
    imageURL,
  });

  res.status(201).json({ success: true, post });
};
