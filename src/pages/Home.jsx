import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <PostList></PostList>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Home;
