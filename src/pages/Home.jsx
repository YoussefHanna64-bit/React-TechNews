import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import Carousel from "../components/Carousel";

class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
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
}
export default Home;
