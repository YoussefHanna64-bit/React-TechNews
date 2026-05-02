import { useCallback, useEffect, useMemo, useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ posts }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = useMemo(() => {
    return posts.slice(0, 3).map((post) => post.imageURL);
  }, [posts]);

  const titles = useMemo(() => {
    return posts.slice(0, 3).map((post) => post.title);
  }, [posts]);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }

    const timerId = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(timerId);
  }, [images.length, currentImgIndex]);

  const next = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prev = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  if (posts.length === 0) {
    return <div className="carousel">No posts available</div>;
  }

  return (
    <>
      <div className="carousel">
        <img src="left.png" id="left" onClick={prev} />
        <div className="imageContainer">
          <img src={images[currentImgIndex]} id="view" />
          <div className="imageTitle">
            <h3>{titles[currentImgIndex]}</h3>
          </div>
        </div>
        <img src="right.png" id="right" onClick={next} />
        <ul>
          <li
            onClick={() => setCurrentImgIndex(0)}
            className={currentImgIndex === 0 ? "active" : ""}
          ></li>
          <li
            onClick={() => setCurrentImgIndex(1)}
            className={currentImgIndex === 1 ? "active" : ""}
          ></li>
          <li
            onClick={() => setCurrentImgIndex(2)}
            className={currentImgIndex === 2 ? "active" : ""}
          ></li>
        </ul>
      </div>
    </>
  );
};
export default Carousel;
