import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="Side">
          <Sidebar></Sidebar>
        </div>
        <div className="List">
          <PostList></PostList>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Home;
