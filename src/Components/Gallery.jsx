import React, { useState } from 'react'
import '../styles/gallery.css'
import Modal from './Modal'

export default function Gallery(props) {
	const [show, setModal] = useState(false)
	const [tag, setTag] = useState('')

	const showModal = tag => {
		setModal(true)
		setTag(tag)
	}

	const hideModal = e => {
		setModal(false)
	}

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
	props.images.map(image =>
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
		<>
			<Modal
				modal={show}
				value={tag}
				handleClose={hideModal}
				images={props.images.filter(
					image => image.context.custom.placement === tag
				)}
			/>
			<div>
				{images.length > 0 ? (
					<div className='gallery-wrapper'>
						{coverImages.map((item, index) => (
							<div
								key={index}
								className='gallery-image'
								onClick={() => showModal(item.tag)}>
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
		</>
	)
}
