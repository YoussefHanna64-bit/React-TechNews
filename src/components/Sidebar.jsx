import Form from "./Form";
import "../styles/Sidebar.css";
import { Component } from "react";

const Sidebar = ({ addPost }) => {
  return (
    <>
      <aside>
        <h5 className="CreatePost">Create Post</h5>
        <Form addPost={addPost} />
      </aside>
    </>
  );
};

export default Sidebar;
