import { useContext, useState } from "react";
import "../styles/AddPost.css";
import axios from "axios";
import { PostContextConfig } from "../context/PostContext";
import { AuthContextConfig } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddPost = () => {
  const { addPost } = useContext(PostContextConfig);
  const { currentUser } = useContext(AuthContextConfig);
  const navigate = useNavigate();

  const [postState, setPostState] = useState({
    title: "",
    category: "",
    imageURL: "",
    description: "",
    article: "",
  });

  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postState.imageURL.startsWith("http")) {
      toast.error("Please enter Image URL starting with http");
      return;
    }

    if (postState.description.length > 150) {
      toast.error("Keep description under 150 chars");
      return;
    }

    const post = {
      ...postState,
      userName: currentUser.name,
    };

    const isadded = await addPost(post);

    if (isadded) {
      toast.success("Post published successfully!");
      navigate("/home");
    } else {
      toast.error("Failed to publish post, please try again");
    }

    setPostState({
      title: "",
      category: "",
      imageURL: "",
      description: "",
      article: "",
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
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={postState.category}
                  onChange={handleChange}
                  required
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  name="imageURL"
                  value={postState.imageURL}
                  onChange={handleChange}
                  required
                />
                <textarea
                  rows="2"
                  placeholder="Description"
                  name="description"
                  value={postState.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <textarea
                  rows="5"
                  placeholder="Article"
                  name="article"
                  value={postState.article}
                  onChange={handleChange}
                  required
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
