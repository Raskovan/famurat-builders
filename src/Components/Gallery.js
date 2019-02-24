import React, { Component } from 'react';
import '../styles/gallery.css';

class Gallery extends Component {

    render() {
        const images = []
        const baseurl = "https://res.cloudinary.com/katala/image/upload/"
        this.props.images.map(image => (
            images.push({
                "image_url": baseurl + image.public_id + '.' + image.format,
                "title": image.context ? `${image.context.custom.caption}` : null,
                "description": image.context ? `${image.context.custom.alt}` : null,
                "width": image.width,
                "height": image.height,
                "cover": image.context.custom.cover ? true : false,
                "tag": image.context.custom.placement,
            })
            ));
        let coverImages = images.filter( img => img.cover)
        return (
            <div>
                {images.length > 0 ?
                <div className="gallery-wrapper">
                    {coverImages.map((item, index) => (
                        <div key={index} className="gallery-image" onClick={() => this.props.handleShow(item.tag)} >
                            <img className="image" src={item.image_url} alt={item.description}/>
                            <div className="middle">
                                <div className="const-text">SHOWCASE</div>
                                <div className="text">{item.title}</div>
                                < div className = "const-text" > {images.filter(image => image.tag === item.tag).length} photos < /div>
                            </div>
                        </div>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default Gallery;