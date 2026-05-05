import { memo, useCallback, useReducer, useState } from "react";

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

const useVotes = () => {
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

  return { voteState, handleUpvote, handleDownvote };
};

export default useVotes;
