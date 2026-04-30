import { Component } from "react";
import "../styles/PostCard.css";

class PostCard extends Component {
  render() {
    const { category, title, userName, description } = this.props;
    return (
      <>
        <div className="Card">
          <p className="Category">{category}</p>
          <h5 className="Title">
            {title}
            <small className="UserName">by {userName}</small>
          </h5>
          <p>{description}</p>
          <button className="ReadMore">Read More</button>
        </div>
      </>
    );
  }
}
export default PostCard;
