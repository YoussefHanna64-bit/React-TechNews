const Upvote = ({ count, handleUpvote }) => {
  return (
    <>
      <button
        className="btn btn-link text-success text-decoration-none"
        onClick={handleUpvote}
      >
        <i className="bi bi-arrow-up-circle"></i> {count}
      </button>
    </>
  );
};

export default Upvote;
