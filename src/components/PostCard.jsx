function PostCard(props) {
  return (
    <>
      {
        <div className="card m-2 shadow-sm">
          <div className="card-body">
            <p className="badge mb-2" style={{ backgroundColor: "orange" }}>
              {props.category}
            </p>
            <h5 className="card-title">
              {props.title}
              <small className="card-subtitle text-muted fst-italic ms-2">
                by {props.userName}
              </small>
            </h5>
            <p className="card-text">{props.description}</p>
            <button
              className="btn btn-outline-primary btn-sm mt-2"
              style={{ color: "orange", borderColor: "orange" }}
            >
              Read More
            </button>
          </div>
        </div>
      }
    </>
  );
}
export default PostCard;
