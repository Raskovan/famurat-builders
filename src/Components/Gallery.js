import React, { Component } from 'react'
import '../styles/gallery.css'
import Modal from './Modal'

class Gallery extends Component {
	state = {
		show: false,
		tag: ''
	}

	showModal = tag => {
		this.setState({ show: true, tag: tag })
	}

	hideModal = () => {
		this.setState({ show: false })
	}

	render() {
		const images = []
		const baseurl = 'https://res.cloudinary.com/famuratbuilders/image/upload/'
		let query =
			'(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
		let ratio = matchMedia(query).matches ? 2 : 1
		const width = window.innerWidth
		const imageWidth =
			width < 600
				? Math.floor(width * 0.9) * ratio
				: Math.floor(width * 0.4) * ratio
		this.props.images.map(image =>
			images.push({
				image_url:
					baseurl +
					'w_' +
					imageWidth +
					'/' +
					image.public_id +
					'.' +
					image.format,
				title: image.context ? `${image.context.custom.caption}` : null,
				description: image.context ? `${image.context.custom.alt}` : null,
				width: image.width,
				height: image.height,
				cover: image.context.custom.cover ? true : false,
				tag: image.context.custom.placement
			})
		)
		let coverImages = images.filter(img => img.cover)
		return (
			<div>
				<Modal
					showModal={this.state.show}
					value={this.state.tag}
					handleClose={this.hideModal}
					images={this.props.images.filter(
						image => image.context.custom.placement === this.state.tag
					)}
				/>
				{images.length > 0 ? (
					<div className='gallery-wrapper'>
						{coverImages.map((item, index) => (
							<div
								key={index}
								className='gallery-image'
								onClick={() => this.showModal(item.tag)}>
								<img
									className='image'
									src={item.image_url}
									alt={item.description}
								/>
								<div className='middle'>
									<div className='const-text'>SHOWCASE</div>
									<div className='text'>{item.title}</div>
									<div className='const-text'>
										{' '}
										{images.filter(image => image.tag === item.tag).length}{' '}
										photos{' '}
									</div>
								</div>
							</div>
						))}
					</div>
				) : null}
			</div>
		)
	}
}

export default Gallery
