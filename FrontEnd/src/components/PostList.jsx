import { useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { useTranslation } from "react-i18next";

const PostList = ({ posts, handleVote }) => {
  const { t } = useTranslation("extra");

  if (posts.length === 0) {
    return <div className="text-center mt-5">{t("No posts available")}</div>;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
