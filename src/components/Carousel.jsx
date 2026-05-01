import { Component } from "react";
import "../styles/Carousel.css";

class Carousel extends Component {
  state = {
    currentImgIndex: 0,
  };

  timerId = null;

  componentDidMount() {
    this.auto();
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
      currentImgIndex: (this.state.currentImgIndex + 1) % 3,
    }));
    this.auto();
  };

  prev = () => {
    this.stop();
    this.setState(() => ({
      currentImgIndex: (this.state.currentImgIndex - 1 + 3) % 3,
    }));
    this.auto();
  };

  setcurrentImgIndex(index) {
    this.stop();
    this.setState({ currentImgIndex: index });
    this.auto();
  }

  render() {
    const { currentImgIndex } = this.state;

    if (this.props.posts.length === 0) {
      return <div className="carousel">No posts available</div>;
    }

    const images = this.props.posts.slice(0, 3).map((post) => post.imageURL);
    const titles = this.props.posts.slice(0, 3).map((post) => post.title);

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
              onClick={() => this.setcurrentImgIndex(0)}
              className={currentImgIndex === 0 ? "active" : ""}
            ></li>
            <li
              onClick={() => this.setcurrentImgIndex(1)}
              className={currentImgIndex === 1 ? "active" : ""}
            ></li>
            <li
              onClick={() => this.setcurrentImgIndex(2)}
              className={currentImgIndex === 2 ? "active" : ""}
            ></li>
          </ul>
        </div>
      </>
    );
  }
}
export default Carousel;
