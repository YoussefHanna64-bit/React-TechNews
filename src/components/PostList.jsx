import { useState } from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: "Dev 1",
      title: "Flutter with Android Studio",
      description: "Android Studio is good for flutter (lie)",
      category: "Android",
    },
    {
      id: 2,
      userName: "Dev 2",
      title: "React for a mobile developer",
      description: "React is some sort of easy",
      category: "Web",
    },
    {
      id: 3,
      userName: "Dev 3",
      title: "Bootstrap vs Tailwind",
      description: "Bootstrap is better than Tailwind (lie)",
      category: "Web",
    },
  ]);

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
export default PostList;
