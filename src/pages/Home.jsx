import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => this.setState({ posts: res.data }));
  };

  addPost = (newPost) => {
    axios.post("http://localhost:3000/posts", newPost).then((res) => {
      this.setState(() => ({
        posts: [res.data, ...this.state.posts],
      }));
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <Header></Header>
        <Carousel posts={posts}></Carousel>
        <main>
          <div className="Side">
            <Sidebar addPost={this.addPost}></Sidebar>
          </div>
          <div className="List">
            <PostList posts={posts} />
          </div>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
export default Home;
