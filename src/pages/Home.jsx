import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import { PostContextConfig } from "../context/PostContext";

const Home = () => {
  const { posts, filteredPosts, setSearchTitle } =
    useContext(PostContextConfig);

  return (
    <>
      <div className="container">
        <Carousel posts={posts}></Carousel>
      </div>
      <main className="container mt-4">
        <SearchBar setSearchTitle={setSearchTitle}></SearchBar>
        <PostList posts={filteredPosts}></PostList>
      </main>
    </>
  );
};
export default Home;
