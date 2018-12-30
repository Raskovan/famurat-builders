import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import 'normalize.css/normalize.css';


class Slides extends Component {

  render() {
  const images=[]
    const baseurl= "https://res.cloudinary.com/katala/image/upload/"
    this.props.images.map(image => (
      images.push({
        "description": image.context ? `${image.context.custom.alt}` : null,
        "image": baseurl + image.public_id + '.' + image.format,
        "title": image.context ? `${image.context.custom.caption}` : null
      })
    ));

    return (
      <div>
      {images.length > 0 ?
        <Slider className="slider-wrapper" autoplay={4500} touchDisabled={true}>
      			{images.map((item, index) => (
      				<div
      					key={index}
      					className="slider-content"
      					style={{ background: `url('${item.image}') no-repeat center center` }}
      				>
      					<div className="inner">
      						<h1>{item.title}</h1>
      						<p>{item.description}</p>
      					</div>
      				</div>
      			))}
      		</Slider> : null}
    </div>
    );
  }
}

export default Slides;
