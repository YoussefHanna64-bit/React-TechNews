import "../styles/Form.css";

function Form() {
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
export default Form;
