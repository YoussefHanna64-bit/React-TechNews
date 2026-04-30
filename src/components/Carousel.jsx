import { Component } from "react";
import "../styles/Carousel.css";
import axios from "axios";

class Carousel extends Component {
  state = {
    images: [],
    currentImgIndex: 0,
    titles: [],
  };

  timerId = null;

  componentDidMount() {
    this.auto();
    axios.get("http://localhost:3000/posts").then((res) => {
      const images = res.data.slice(0, 3).map((post) => post.imageURL);
      const titles = res.data.slice(0, 3).map((post) => post.title);
      this.setState({ images, titles });
    });
  }

  auto() {
    if (this.timerId !== null) {
      return;
    }

    this.timerId = setInterval(() => {
      this.next();
    }, 3000);
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  next = () => {
    this.stop();
    this.setState(() => ({
      currentImgIndex:
        (this.state.currentImgIndex + 1) % this.state.images.length,
    }));
    this.auto();
  };

  prev = () => {
    this.stop();
    this.setState(() => ({
      currentImgIndex:
        (this.state.currentImgIndex - 1 + this.state.images.length) %
        this.state.images.length,
    }));
    this.auto();
  };

  setIndex(index) {
    this.stop();
    this.setState({ currentImgIndex: index });
    this.auto();
  }

  render() {
    const { images, currentImgIndex, titles } = this.state;
    
    return (
      <>
        <div className="carousel">
          <img src="left.png" id="left" onClick={this.prev} />
          <div className="imageContainer">
            <img src={images[currentImgIndex]} id="view" />
            <div className="imageTitle">
              <h3>{titles[currentImgIndex]}</h3>
            </div>
          </div>
          <img src="right.png" id="right" onClick={this.next} />
          <ul>
            <li
              onClick={() => this.setIndex(0)}
              className={currentImgIndex === 0 ? "active" : ""}
            ></li>
            <li
              onClick={() => this.setIndex(1)}
              className={currentImgIndex === 1 ? "active" : ""}
            ></li>
            <li
              onClick={() => this.setIndex(2)}
              className={currentImgIndex === 2 ? "active" : ""}
            ></li>
          </ul>
        </div>
      </>
    );
  }
}
export default Carousel;
