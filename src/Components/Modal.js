import React, { Component } from 'react';
import '../styles/modal.css';

class Modal extends Component {
    
    render() {
        let showHideClassName = this.props.showModal ? 'modal display-block' : 'modal display-none';
        const images = []
        const baseurl = "https://res.cloudinary.com/katala/image/upload/"
        this.props.images.map(image => (
            images.push({
                "image_url": baseurl + image.public_id + '.' + image.format,
                "title": image.context ? `${image.context.custom.caption}` : null,
                "description": image.context ? `${image.context.custom.alt}` : null,
                "width": image.width,
                "height": image.height
            })
        ));
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <div className="close-btn" onClick={this.props.handleClose}>
                    </div>
                    {images.length > 0 ? 
                        <div className="module-image-container">
                            <img className='module-image' src={images[0].image_url}/>
                        </div> : null}
                </section>
            </div>
        );
    }
}

export default Modal;
