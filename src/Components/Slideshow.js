import React, { useState, useEffect } from 'react'
import Slide from './Slide'
import '../styles/slideshow.css'

function Slideshow(props) {
	const [indexValue, setIndexValue] = useState({
		currentIndex: 0,
		translateValue: 0
  })
  
  useEffect(()=>{
    setIndexValue({
			currentIndex: 0,
			translateValue: 0
		})
  }, [props.modal])

	const goToPrevSlide = () => {
		if (indexValue.currentIndex === 0) return

		setIndexValue(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + slideWidth()
		}))
	}

	const goToNextSlide = () => {
		if (indexValue.currentIndex === props.images.length - 1) {
			return setIndexValue({
				currentIndex: 0,
				translateValue: 0
			})
		}

		setIndexValue(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -slideWidth()
		}))
	}

	const slideWidth = () => {
		return document.querySelector('.glr_slide').clientWidth
	}
	return (
		<div className='glr_slider'>
			<div
				className='glr_slider-wrapper'
				style={{
					transform: `translateX(${indexValue.translateValue}px)`,
					transition: 'transform ease-out 0.45s'
				}}>
				{props.images.map((image, i) => (
					<Slide
						key={i}
						image={image}
						length={props.images.length}
						index={i + 1}
					/>
				))}
			</div>
			<div className='backArrow arrow' onClick={goToPrevSlide}>
				<i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
			</div>
			<div className='nextArrow arrow' onClick={goToNextSlide}>
				<i className='fa fa-arrow-right fa-2x' aria-hidden='true' />
			</div>
		</div>
	)
}

export default Slideshow
