function Form() {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <input type="text" className="form-control" placeholder="Title" />
        <textarea
          className="form-control "
          rows="3"
          placeholder="Description"
          style={{ resize: "none" }}
        ></textarea>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "orange", borderColor: "orange" }}
        >
          Publish News
        </button>
      </div>
    </>
  );
}
export default Form;
