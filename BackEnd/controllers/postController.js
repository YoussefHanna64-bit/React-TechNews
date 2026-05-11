import Post from "../models/postModel.js";
import { createError } from "../middleware/errorHandling.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find();

  res.status(200).json({ success: true, posts });
};

export const createPost = async (req, res) => {
  const { title, description, category, imageURL, userName } = req.body;

  if (!title || !description || !category || !userName) {
    throw createError(
      400,
      "Title, description, category, and user name fields are required",
    );
  }

  const post = await Post.create({
    title,
    description,
    category,
    imageURL,
    userName,
  });

  res.status(201).json({ success: true, post });
};
