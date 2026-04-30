import "../styles/PostCard.css";

function PostCard(props) {
  return (
    <>
      {
        <div className="Card">
          <p className="Category">{props.category}</p>
          <h5 className="Title">
            {props.title}
            <small className="UserName">by {props.userName}</small>
          </h5>
          <p>{props.description}</p>
          <button className="ReadMore">Read More</button>
        </div>
      }
    </>
  );
}
export default PostCard;
