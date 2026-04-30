import { Component, useState } from "react";
import PostCard from "./PostCard";

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    posts: [
      {
        id: 1,
        userName: "Tech Radar",
        title: "React 19 is officially here",
        description:
          "The new React Compiler and 'Actions' are changing how we handle state and performance.",
        category: "Web Dev",
      },
      {
        id: 2,
        userName: "Cloud Guru",
        title: "AI integration in VS Code",
        description:
          "GitHub Copilot Extensions now allow developers to build AI agents directly inside the editor.",
        category: "Tools",
      },
      {
        id: 3,
        userName: "Dev Insider",
        title: "Apple M4 Chip Performance",
        description:
          "The latest M4 chips are showing massive gains in AI processing for mobile and desktop development.",
        category: "Hardware",
      },
    ],
  };

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
          />
        ))}
      </>
    );
  }
}
export default PostList;
