const Downvote = ({ count, handleDownvote }) => {
  return (
    <>
      <button
        className="btn btn-link text-danger text-decoration-none"
        onClick={handleDownvote}
      >
        <i className="bi bi-arrow-down-circle"></i> {count}
      </button>
    </>
  );
};

export default Downvote;
