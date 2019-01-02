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
    gallery: [],
    show: false
  };

  showModal = () => {
    this.setState({show: true})
    console.log("Image clicked", this.state)
  }

  hideModal = () => {
    this.setState({show:false})
  }

  componentDidMount() {
    fetch('http://res.cloudinary.com/katala/image/list/gallery.json')
      .then(res => res.json())
      .then(response => {
        this.setState({ gallery: response.resources });
      });
  }

  render() {
    return (
      <div>
        <Modal showModal={this.state.show} handleClose={this.hideModal} images={this.state.gallery}/>
        <Navbar />
        <Slides images={this.state.gallery} />
        <About />
        <Gallery images={this.state.gallery} handleShow={this.showModal}/>
        <Quotes />
        <Getintouch />
        <Footer />
      </div>
    );
  }
}

export default App;
