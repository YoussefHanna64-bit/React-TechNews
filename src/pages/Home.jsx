import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
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
        <div className="container">
          <Carousel posts={posts}></Carousel>
        </div>
        <main className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <Sidebar addPost={this.addPost}></Sidebar>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <PostList posts={posts} />
            </div>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
export default Home;
