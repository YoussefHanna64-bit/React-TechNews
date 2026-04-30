import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <>
        <div className="Form">
          <input type="text" placeholder="Title" />
          <textarea rows="3" placeholder="Description"></textarea>
          <button className="submit">Publish News</button>
        </div>
      </>
    );
  }
}
export default Form;
