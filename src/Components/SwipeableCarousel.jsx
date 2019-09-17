import React, { useState, useEffect } from 'react'
import '../styles/swipeable.css'

const IMG_WIDTH = window.innerWidth
const IMG_HEIGHT = window.innerHeight
let wheelTimeout
let transitionTimeout
let lastTouch = 0

function SwipeableCarousel(props) {
	const [data, setData] = useState({
		currentIndex: 0,
		movement: 0,
		transitionDuration: '0s'
	})

	const { currentIndex, movement, transitionDuration } = data
	const maxLength = props.imgs.length - 1
	const maxMovement = maxLength * IMG_WIDTH

	useEffect(() => {
		return () => {
			clearTimeout(transitionTimeout)
		}
	})

	const handleTouchStart = e => {
		lastTouch = e.nativeEvent.touches[0].clientX
	}

	const handleTouchMove = e => {
		const delta = lastTouch - e.nativeEvent.touches[0].clientX
		lastTouch = e.nativeEvent.touches[0].clientX
		handleMovement(delta)
	}

	const handleTouchEnd = () => {
		handleMovementEnd()
		lastTouch = 0
	}

	const handleWheel = e => {
		clearTimeout(wheelTimeout)
		handleMovement(e.deltaX)
		wheelTimeout = setTimeout(() => handleMovementEnd(), 100)
	}

	const handleMovement = delta => {
		clearTimeout(transitionTimeout)
		setData(data => {
			let nextMovement = data.movement + delta
			if (nextMovement < 0) {
				nextMovement = 0
			}
			if (nextMovement > maxLength * IMG_WIDTH) {
				nextMovement = maxLength * IMG_WIDTH
			}
			return { ...data, movement: nextMovement, transitionDuration: '0s' }
		})
	}

	const handleMovementEnd = () => {
		const endPosition = movement / IMG_WIDTH
		const endPartial = endPosition % 1
		const endingIndex = endPosition - endPartial
		const deltaInteger = endingIndex - currentIndex
		let nextIndex = endingIndex
		if (deltaInteger >= 0) {
			if (endPartial >= 0.1) {
				nextIndex += 1
			}
		} else if (deltaInteger < 0) {
			nextIndex = currentIndex - Math.abs(deltaInteger)
			if (endPartial > 0.9) {
				nextIndex += 1
			}
		}
		transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)))
	}

	const transitionTo = (index, duration) => {
		setData({
			...data,
			currentIndex: index,
			movement: index * IMG_WIDTH,
			transitionDuration: `${duration}s`
		})
		transitionTimeout = setTimeout(() => {
			setData({ ...data, transitionDuration: '0s' })
		}, duration * 100)
  }
  
  const handleClose = () => {
    props.closeBtn()
    setTimeout(() => {
      setData({
        ...data,
        currentIndex: 0,
        movement: 0,
        transitionDuration: '0s'
      })
		}, 1000)
  }

	return (
		<>
			<div className='close-button'>
				<img
					className='close-image'
					src={require(`../assets/close.svg`)}
					alt='Closw Button'
					onClick={handleClose}
				/>
			</div>
			<div
				className='main'
				style={{
					width: `${IMG_WIDTH}px`,
					height: `${IMG_HEIGHT}px`
				}}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onWheel={handleWheel}>
				<div
					className='swiper'
					style={{
						transform: `translateX(${movement * -1}px)`,
						transitionDuration: transitionDuration
					}}>
					{props.imgs.map(src => (
						<img
							key={src.image_url}
							src={src.image_url}
							alt={src.title}
							width='100%'
							height={
								src.width < src.height
									? '100%'
									: IMG_WIDTH / (src.width / src.height) + 'px'
							}
						/>
					))}
				</div>
				{movement !== 0 && (
					<div
						className='back move'
						onClick={() => {
							transitionTo(currentIndex - 1, 0.5)
						}}>
						{'<'}
					</div>
				)}
				{movement !== maxMovement && (
					<div
						className='next move'
						onClick={() => transitionTo(currentIndex + 1, 0.5)}>
						>
					</div>
				)}
			</div>
		</>
	)
}

export default SwipeableCarousel
