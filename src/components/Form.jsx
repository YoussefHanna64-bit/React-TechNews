import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <>
        <div className="Form">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Image URL" />
          <textarea rows="3" placeholder="Description"></textarea>
          <button className="submit">Publish News</button>
        </div>
      </>
    );
  }
}
export default Form;
