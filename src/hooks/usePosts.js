import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

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

  const filteredPosts = useMemo(() => {
    if (!searchTitle) {
      return posts;
    }

    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase()),
    );
  }, [posts, searchTitle]);

  return { posts, addPost, filteredPosts, setSearchTitle };
};

export default usePosts;
