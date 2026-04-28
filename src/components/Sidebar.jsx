import Form from "./Form";

function Sidebar() {
  return (
    <>
      <aside className="p-3 border rounded bg-light sticky-top">
      <h5 className="mb-3">Create Post</h5>
      <Form />
      </aside>
    </>
  );
}
export default Sidebar;
