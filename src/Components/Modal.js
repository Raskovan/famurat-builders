import React, { Component } from 'react';
import '../styles/modal.css';
import Slideshow from "./Slideshow";

class Modal extends Component {

  render() {
    let showHideClassName = this.props.showModal
      ? "modal display-block"
      : "modal display-none";
    const images = [];
    const baseurl = "https://res.cloudinary.com/famuratbuilders/image/upload/";
    let query =
        "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
    let ratio = matchMedia(query).matches ? 2 : 1;
    const width = window.innerWidth
    const imageWidth = width * ratio;
    this.props.images.map(image =>
      images.push({
        image_url: baseurl + 'w_' + imageWidth + '/' + image.public_id + "." + image.format,
        title: image.context ? `${image.context.custom.caption}` : null,
        description: image.context ? `${image.context.custom.alt}` : null,
        width: image.width,
        height: image.height,
        cover: image.context.custom.cover ? true : false,
        tag: image.context.custom.placement
      })
    );
    return (
			<div className={showHideClassName}>
				<div className='close-btn' onClick={this.props.handleClose} />
				<section className='modal-main'>
						<Slideshow images={images} />
				</section>
			</div>
		)
  }
}

export default Modal;
