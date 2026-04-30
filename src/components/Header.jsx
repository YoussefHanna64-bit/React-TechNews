import { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <p className="Logo">
            <span className="Tech">Tech</span>
            News
          </p>

          <div className="left">
            <a href="#">Home</a>
            <a href="#">My Posts</a>
          </div>
        </nav>
      </>
    );
  }
}
export default Header;
