import { Component } from "react";
import "../styles/Form.css";
import axios from "axios";

class Form extends Component {
  state = {
    title: "",
    category: "",
    userName: "",
    imageURL: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addPost(this.state);

    this.setState({
      title: "",
      category: "",
      userName: "",
      imageURL: "",
      description: "",
    });
  };

  render() {
    const { title, category, userName, imageURL, description } = this.state;

    return (
      <>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={userName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Image URL"
            name="imageURL"
            value={imageURL}
            onChange={this.handleChange}
          />
          <textarea
            rows="3"
            placeholder="Description"
            name="description"
            value={description}
            onChange={this.handleChange}
          ></textarea>
          <button className="submit">Publish</button>
        </form>
      </>
    );
  }
}
export default Form;
