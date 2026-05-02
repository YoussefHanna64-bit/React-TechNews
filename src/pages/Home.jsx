import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import usePosts from "../hooks/usePosts";

const Home = () => {
  const { posts, addPost } = usePosts();
  
  return (
    <>
      <Header></Header>
      <div className="container">
        <Carousel posts={posts}></Carousel>
      </div>
      <main className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <Sidebar addPost={addPost}></Sidebar>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <PostList posts={posts} />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
export default Home;
