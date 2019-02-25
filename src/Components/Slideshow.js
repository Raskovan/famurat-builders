import React, { Component } from "react";
import "../styles/slideshow.css";

class Slideshow extends Component {
    state = {
      currentIndex: 0,
      translateValue: 0
    };

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".glr_slide").clientWidth;
  };

  render() {
    return (
      <div className="glr_slider">
        <div
          className="glr_slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.props.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <div className="backArrow arrow" onClick={this.goToPrevSlide}>
          <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
        </div>
        <div className="nextArrow arrow" onClick={this.goToNextSlide}>
          <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.image_url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="glr_slide" style={styles} />;
};

export default Slideshow;
