import { Component, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const PostList = ({ posts, handleVote }) => {
  if (posts.length === 0) {
    return <div>No posts available</div>;
  }

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
};

export default PostList;
