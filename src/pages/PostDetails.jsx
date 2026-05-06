import { Link, useParams } from "react-router";
import Downvote from "../components/Downvote";
import Upvote from "../components/Upvote";
import "../styles/PostCard.css";
import { useContext, useEffect } from "react";
import { PostContextConfig } from "../context/PostContext";
import useVotes from "../hooks/useVotes";

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContextConfig);
  const post = posts.find((p) => p.id === id);

  const { voteState, handleUpvote, handleDownvote } = useVotes();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-warning" role="status"></div>
        <h3 className="mt-3">Loading post...</h3>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <Link
          to="/home"
          className="text-decoration-none text-muted mb-3 d-inline-block"
        >
          <i className="bi bi-arrow-left"></i> Back to Feed
        </Link>

        <div className="bg-white rounded shadow-sm p-4">
          <img
            src={post.imageURL}
            alt={post.title}
            className="img-fluid rounded mb-4 w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="text-muted">By {post.userName}</h5>
              <span className="Category">{post.category}</span>
            </div>

            <div className="d-flex align-items-center">
              <Upvote
                count={voteState.upvoteCounter}
                handleUpvote={handleUpvote}
              />
              <Downvote
                count={voteState.downvoteCounter}
                handleDownvote={handleDownvote}
              />
            </div>
          </div>

          <h1 className="mb-4 fw-bold">{post.title}</h1>

          <h5 className="text-secondary fw-semibold mb-4 border-bottom pb-4">
            {post.description}
          </h5>

          <div
            className="article-content"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            <p className="article-text" style={{ whiteSpace: "pre-line" }}>
              {post.article}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
