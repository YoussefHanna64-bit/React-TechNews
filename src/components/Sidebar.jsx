import Form from "./Form";
import "../styles/Sidebar.css";
import { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <h5 className="CreatePost">Create Post</h5>
          <Form />
        </aside>
      </>
    );
  }
}
export default Sidebar;
