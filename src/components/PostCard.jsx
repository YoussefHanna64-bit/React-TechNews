import { memo } from "react";
import "../styles/PostCard.css";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { upvotePost, downvotePost } from "../Redux/slices/postSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("postCard");
  const { language } = useSelector((state) => state.i18nR);

  const handleUpvote = () => {
    dispatch(upvotePost(post));
  };

  const handleDownvote = () => {
    dispatch(downvotePost(post));
  };

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
                <Upvote count={post.upvotes || 0} handleUpvote={handleUpvote} />
                <Downvote
                  count={post.downvotes || 0}
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
