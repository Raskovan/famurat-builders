import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Slides from "./Components/Slides";
import About from "./Components/About";
import Quotes from "./Components/Quotes";
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"
import Getintouch from './Components/Getintouch';
import Modal from "./Components/Modal"

class App extends Component {
  state = {
    sliderImages: [],
    galleryImages: [],
    show: false,
    tag: ""
  };

  showModal = (tag) => {
    this.setState({show: true, tag:tag})
  }

  hideModal = () => {
    this.setState({show:false})
  }

  componentDidMount() {
    fetch('http://res.cloudinary.com/katala/image/list/gallery.json')
      .then(res => res.json())
      .then(response => {
        let sliderImages = response.resources.filter(img => img.context.custom.placement === 'slider')
        let galleryImages = response.resources.filter(img => img.context.custom.placement !== 'slider')
        this.setState({ sliderImages: sliderImages,  galleryImages: galleryImages});
      });
  }

  render() {
    return (
      <div>
        <Modal showModal={this.state.show} value={this.state.tag} handleClose={this.hideModal} images={this.state.galleryImages.filter(image => image.context.custom.placement === this.state.tag)}/>
        <Navbar />
        <Slides images={this.state.sliderImages} />
        <About />
        <Gallery images={this.state.galleryImages} handleShow={this.showModal}/>
        <Quotes />
        <Getintouch />
        <Footer />
      </div>
    );
  }
}

export default App;
