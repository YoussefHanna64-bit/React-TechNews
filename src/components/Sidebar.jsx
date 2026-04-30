import Form from "./Form";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside>
        <h5 className="CreatePost">Create Post</h5>
        <Form />
      </aside>
    </>
  );
}
export default Sidebar;
