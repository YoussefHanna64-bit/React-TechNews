import { useState } from "react";
import "../styles/AddPost.css";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Redux/slices/postSlice";
import { useTranslation } from "react-i18next";

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation("addPost");
  const { language } = useSelector((state) => state.i18nR);

  const { currentUser } = useSelector((state) => state.authR);

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
      toast.error(t("Please enter Image URL starting with http"));
      return;
    }

    if (postState.description.length > 150) {
      toast.error(t("Keep description under 150 chars"));
      return;
    }

    const post = {
      ...postState,
      userName: currentUser.name,
    };

    const isadded = await dispatch(addPost(post));

    if (isadded.payload) {
      toast.success(t("Post published successfully!"));
      navigate("/home");
    } else {
      toast.error(t("Failed to publish post, please try again"));
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
      <div className="container mt-5" dir={language === "en" ? "ltr" : "rtl"}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="mb-3 fw-bold">
              {t("Create a New")}{" "}
              <span className="OrangeColor">{t("Post")}</span>
            </h2>

            <div className="p-4 border-0">
              <form className="Form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={t("Title")}
                  name="title"
                  value={postState.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder={t("Category")}
                  name="category"
                  value={postState.category}
                  onChange={handleChange}
                  required
                />
                <input
                  type="url"
                  placeholder={t("Image URL")}
                  name="imageURL"
                  value={postState.imageURL}
                  onChange={handleChange}
                  required
                />
                <textarea
                  rows="2"
                  placeholder={t("Description")}
                  name="description"
                  value={postState.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <textarea
                  rows="5"
                  placeholder={t("Article")}
                  name="article"
                  value={postState.article}
                  onChange={handleChange}
                  required
                ></textarea>
                <button className="submit">{t("Publish")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
