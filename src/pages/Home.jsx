import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import { PostContextConfig } from "../context/PostContext";

const Home = () => {
  const { posts, addPost, filteredPosts, setSearchTitle } =
    useContext(PostContextConfig);

  return (
    <>
      <div className="container">
        <Carousel posts={posts}></Carousel>
      </div>
      <main className="container mt-4">
        {/* <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <Sidebar addPost={addPost}></Sidebar>
          </div> */}
        {/* <div className="col-12 col-md-8 col-lg-9"> */}
        <SearchBar setSearchTitle={setSearchTitle}></SearchBar>
        <PostList posts={filteredPosts}></PostList>
        {/* </div> */}
        {/* </div> */}
      </main>
    </>
  );
};
export default Home;
