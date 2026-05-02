import { Component, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const PostList = ({ posts, handleVote }) => {
  if (posts.length === 0) {
    return <div className="text-center mt-5">No posts available</div>;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-3">
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
      </div>
    </>
  );
};

export default PostList;
