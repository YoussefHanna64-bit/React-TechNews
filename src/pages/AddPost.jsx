import { useContext, useState } from "react";
import "../styles/AddPost.css";
import axios from "axios";
import { PostContextConfig } from "../context/PostContext";
import { AuthContextConfig } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router";

const AddPost = () => {
  const { addPost } = useContext(PostContextConfig);
  const { currentUser } = useContext(AuthContextConfig);
  const navigate = useNavigate();

  const [postState, setPostState] = useState({
    title: "",
    category: "",
    imageURL: "",
    description: "",
  });

  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      ...postState,
      userName: currentUser.name,
    };

    const isadded = await addPost(post);

    if (isadded) {
      navigate("/home");
    } else {
      // toast
    }

    setPostState({
      title: "",
      category: "",
      imageURL: "",
      description: "",
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="mb-3 fw-bold">
              Create a New <span className="OrangeColor">Post</span>
            </h2>

            <div className="p-4 border-0">
              <form className="Form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={postState.title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={postState.category}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  name="imageURL"
                  value={postState.imageURL}
                  onChange={handleChange}
                />
                <textarea
                  rows="3"
                  placeholder="Description"
                  name="description"
                  value={postState.description}
                  onChange={handleChange}
                ></textarea>
                <button className="submit">Publish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
