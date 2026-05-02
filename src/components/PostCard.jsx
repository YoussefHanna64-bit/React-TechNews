import { memo, useCallback, useReducer, useState } from "react";
import "../styles/PostCard.css";
import Upvote from "./Upvote";
import Downvote from "./Downvote";

function voteReducer(state, action) {
  switch (action.type) {
    case "upvote":
      return {
        upvoteCounter: state.upvoteCounter === 1 ? 0 : 1,
        downvoteCounter: 0,
      };
    case "downvote":
      return {
        upvoteCounter: 0,
        downvoteCounter: state.downvoteCounter === 1 ? 0 : 1,
      };
    default:
      return state;
  }
}

const PostCard = ({ category, title, userName, description, imageURL }) => {
  const [voteState, dispatch] = useReducer(voteReducer, {
    upvoteCounter: 0,
    downvoteCounter: 0,
  });

  const handleUpvote = useCallback(() => {
    dispatch({ type: "upvote" });
  }, []);

  const handleDownvote = useCallback(() => {
    dispatch({ type: "downvote" });
  }, []);

  return (
    <>
      <div className="col">
        <div className="Card h-100 d-flex flex-column">
          <img src={imageURL} alt={title} className="PostImage" />
          <div className="d-flex flex-column flex-grow-1">
            <div>
              <p className="Category">{category}</p>
            </div>

            <h5 className="Title">
              {title}
              <small className="UserName">by {userName}</small>
            </h5>

            <p>{description}</p>

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
              <button className="ReadMore">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(PostCard);
