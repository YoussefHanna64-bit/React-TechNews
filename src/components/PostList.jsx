import { Component, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => this.setState({ posts: res.data }));
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userName={post.userName}
            title={post.title}
            description={post.description}
            category={post.category}
            imageURL={post.imageURL}
          />
        ))}
      </>
    );
  }
}
export default PostList;
