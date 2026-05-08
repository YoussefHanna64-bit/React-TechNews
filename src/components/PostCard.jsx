import { memo } from "react";
import "../styles/PostCard.css";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import { Link } from "react-router";
import useVotes from "../hooks/useVotes";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const { voteState, handleUpvote, handleDownvote } = useVotes();
  const { t } = useTranslation("postCard");
  const { language } = useSelector((state) => state.i18nR);

  return (
    <>
      <div className="col" dir={language === "en" ? "ltr" : "rtl"}>
        <div className="card h-100 d-flex flex-column">
          <img src={post.imageURL} alt={post.title} className="PostImage" />
          <div className="d-flex flex-column flex-grow-1">
            <div>
              <p className="Category">{post.category}</p>
            </div>

            <h5 className="Title">
              {post.title}
              <small className="UserName">
                {t("by")} {post.userName}
              </small>
            </h5>

            <p>{post.description}</p>

            <div className="d-flex justify-content-between align-items-center pt-3 mt-auto">
              <div>
                <Upvote
                  count={voteState.upvoteCounter}
                  handleUpvote={handleUpvote}
                />
                <Downvote
                  count={voteState.downvoteCounter}
                  handleDownvote={handleDownvote}
                />
              </div>
              <Link to={`/post/${post.id}`} className="ReadMore">
                {t("Read More")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(PostCard);
