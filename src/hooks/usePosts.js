import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  };

  const addPost = useCallback((newPost) => {
    axios.post("http://localhost:3000/posts", newPost).then((res) => {
      setPosts((prevPosts) => [res.data, ...prevPosts]);
    });
  }, []);

  return { posts, addPost };
};

export default usePosts;
