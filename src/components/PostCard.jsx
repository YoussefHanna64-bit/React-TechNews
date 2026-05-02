import { Component, useState } from "react";
import "../styles/PostCard.css";
import Upvote from "./Upvote";
import Downvote from "./Downvote";

const PostCard = ({ category, title, userName, description, imageURL }) => {
  const [upvoteCounter, setUpvoteCounter] = useState(0);
  const [downvoteCounter, setDownvoteCounter] = useState(0);

  const handleUpvote = () => {
    if (downvoteCounter > 0) {
      setDownvoteCounter(downvoteCounter - 1);
    }
    if (upvoteCounter < 1) {
      setUpvoteCounter(upvoteCounter + 1);
    } else {
      setUpvoteCounter(upvoteCounter - 1);
    }
  };

  const handleDownvote = () => {
    if (upvoteCounter > 0) {
      setUpvoteCounter(upvoteCounter - 1);
    }
    if (downvoteCounter < 1) {
      setDownvoteCounter(downvoteCounter + 1);
    } else {
      setDownvoteCounter(downvoteCounter - 1);
    }
  };

  return (
    <>
      <div className="col">
        <div className="Card h-100 d-flex flex-column">
          <img src={imageURL} alt={title} className="PostImage" />
          <div className="d-flex flex-column flex-grow-1">
            <div>
              <p className="Category">{category}</p>
            </div>

            <h5 className="">
              {title}
              <small className="UserName">by {userName}</small>
            </h5>

            <p>{description}</p>

            <div className="d-flex justify-content-between align-items-center pt-3 mt-auto">
              <div>
                <Upvote count={upvoteCounter} handleUpvote={handleUpvote} />
                <Downvote
                  count={downvoteCounter}
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

export default PostCard;
