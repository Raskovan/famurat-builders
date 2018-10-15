import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Slides from "./Components/Slides";
import About from "./Components/About";

class App extends Component {
  state = {
    gallery: []
  };

  componentDidMount() {
    fetch(`http://res.cloudinary.com/katala/image/list/gallery.json`)
      .then(res => res.json())
      .then(response => {
        this.setState({ gallery: response.resources });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Slides images={this.state.gallery} />
        <About />
      </div>
    );
  }
}

export default App;
