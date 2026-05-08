import PostList from "../components/PostList";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/slices/postSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { posts, searchTitle } = useSelector((state) => state.postsR);

  useEffect(() => {
    dispatch(getPosts());
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
    <>
      <div className="container">
        <Carousel posts={posts}></Carousel>
      </div>
      <main className="container mt-4">
        <SearchBar></SearchBar>
        <PostList posts={filteredPosts}></PostList>
      </main>
    </>
  );
};
export default Home;
