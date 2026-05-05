import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

export const PostContextConfig = createContext();

const baseUrl = "http://localhost:3000/posts";

const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get(baseUrl).then((res) => setPosts(res.data));
  };

  const addPost = useCallback(async (newPost) => {
    try {
      const res = await axios.post(baseUrl, newPost);

      if (res.status === 201) {
        setPosts((prevPosts) => [res.data, ...prevPosts]);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }, []);

  const filteredPosts = useMemo(() => {
    if (!searchTitle) {
      return posts;
    }

    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase()),
    );
  }, [posts, searchTitle]);

  return (
    <PostContextConfig.Provider
      value={{ posts, setSearchTitle, addPost, filteredPosts }}
    >
      {children}
    </PostContextConfig.Provider>
  );
};

export default PostContext;
