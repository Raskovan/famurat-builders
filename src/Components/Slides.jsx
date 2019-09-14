import React, { memo } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../styles/slider-animations.css'
import '../styles/styles.css'
import 'normalize.css/normalize.css'

function Slides(props) {
	// shouldComponentUpdate(nextProps) {
	// 	if (this.props.images === nextProps.images) return false
	// 	else return true
	// }

	const images = []
	const baseurl = 'https://res.cloudinary.com/famuratbuilders/image/upload/'
	const width = window.innerWidth
	let query =
		'(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
	let ratio = matchMedia(query).matches ? 2 : 1
	const imageWidth = Math.floor(width * 0.9) * ratio
	props.images.map(image =>
		images.push({
			description: image.context ? `${image.context.custom.alt}` : null,
			image:
				baseurl +
				'w_' +
				imageWidth +
				'/' +
				image.public_id +
				'.' +
				image.format,
			title: image.context ? `${image.context.custom.caption}` : null
		})
	)

	return (
		<>
			{images.length > 0 ? (
				<Slider
					className='slider-wrapper'
					autoplay={3500}
					infinite={true}
					minSwipeOffset={15}>
					{images.map((item, index) => (
						<div
							key={index}
							className='slider-content'
							style={{
								background: `url('${item.image}') no-repeat center center`
							}}>
							<div className='inner'>
								<h1>{item.title}</h1>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</Slider>
			) : null}
		</>
	)
}

export default memo(Slides)
