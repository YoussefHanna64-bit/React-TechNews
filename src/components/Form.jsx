import { useState } from "react";
import "../styles/Form.css";
import axios from "axios";

const Form = ({ addPost }) => {
  const [state, setState] = useState({
    title: "",
    category: "",
    userName: "",
    imageURL: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost(state);

    setState({
      title: "",
      category: "",
      userName: "",
      imageURL: "",
      description: "",
    });
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={state.category}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={state.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={state.imageURL}
          onChange={handleChange}
        />
        <textarea
          rows="3"
          placeholder="Description"
          name="description"
          value={state.description}
          onChange={handleChange}
        ></textarea>
        <button className="submit">Publish</button>
      </form>
    </>
  );
};

export default Form;
