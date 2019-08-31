import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Slides from "./Components/Slides";
import About from "./Components/About";
import Quotes from "./Components/Quotes";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Getintouch from "./Components/Getintouch";

class App extends Component {
  state = {
    sliderImages: [],
    galleryImages: [],
  };

  componentDidMount() {
    fetch("http://res.cloudinary.com/famuratbuilders/image/list/gallery.json")
      .then(res => res.json())
      .then(response => {
        let sliderImages = response.resources.filter(
          img => img.context.custom.placement === "slider"
        )
        let galleryImages = response.resources.filter(
          img => img.context.custom.placement !== "slider"
        );
        this.setState({
          sliderImages: sliderImages,
          galleryImages: galleryImages
        });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Slides images={this.state.sliderImages} />
        <About />
        <Gallery images={this.state.galleryImages} />
        <Quotes />
        <Getintouch />
        <Footer />
      </div>
    );
  }
}

export default App;