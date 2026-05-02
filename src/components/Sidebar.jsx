import Form from "./Form";

const Sidebar = ({ addPost }) => {
  return (
    <>
      <aside className="bg-light p-3 border border-secondary-subtle rounded-3 sticky-top">
        <h5 className="mb-3">Create Post</h5>
        <Form addPost={addPost} />
      </aside>
    </>
  );
};

export default Sidebar;
