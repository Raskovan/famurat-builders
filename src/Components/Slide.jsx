import React, { memo } from 'react'
import '../styles/slide.css'

function Slide(props) {
	const { image, length, index } = props
	const styles = {
		backgroundImage: `url(${image.image_url})`,
		backgroundSize: image.height > image.width ? 'contain' : 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%'
	}

	const formattedCaptionArray = []
	let link
	const linkArray = image.description.split(' ')
	linkArray.forEach(word => {
		if (word.match('http:') || word.match('https:')) {
			link = `<a href='${word}' target='_new'>${
				word.split('//')[1].split('/')[0]
			}</a>`
			formattedCaptionArray.push(link)
		} else {
			formattedCaptionArray.push(word)
		}
	})
	const formattedCaption = formattedCaptionArray.join(' ')

	return (
		<div className='glr_slide'>
			<div className='glr_slide' style={styles}>
				<p className='slide-caption'>
					{index} of {length} >{' '}
					{image.description !== 'undefined' ? (
						<span dangerouslySetInnerHTML={{ __html: formattedCaption }} />
					) : (
						'Photo'
					)}
				</p>
			</div>
		</div>
	)
}
export default memo(Slide)