import React, { useState, useEffect, useRef } from 'react'
import '../styles/swipeable.css'

let wheelTimeout
let transitionTimeout
let lastTouch = 0

function SwipeableCarousel(props) {
	const modalRef = useRef()
	const [dimensions, setDimensions] = React.useState({
		wndHeight: window.innerHeight,
		wndWidth: window.innerWidth
	})

	const [data, setData] = useState({
		currentIndex: 0,
		movement: 0,
		transitionDuration: '0s'
	})

	const { currentIndex, movement, transitionDuration } = data
	const maxLength = props.imgs.length - 1
	const maxMovement = maxLength * dimensions.wndWidth

	useEffect(() => {
		function handleResize() {
      if (
				dimensions.wndHeight - window.innerHeight >= 15 ||
				dimensions.wndHeight - window.innerHeight <= -15
			) {
				setDimensions({
					wndHeight: window.innerHeight,
					wndWidth: window.innerWidth
				})
				setData({
					...data,
					movement: window.innerWidth * data.currentIndex,
					currentIndex: currentIndex,
					transitionDuration: '0s'
				})
			}
		}
		window.addEventListener('resize', handleResize)
		return () => {
			clearTimeout(transitionTimeout)
			window.removeEventListener('resize', handleResize)
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
			if (nextMovement > maxLength * dimensions.wndWidth) {
				nextMovement = maxLength * dimensions.wndWidth
			}
			return { ...data, movement: nextMovement, transitionDuration: '0s' }
		})
	}

	const handleMovementEnd = () => {
		const endPosition = movement / dimensions.wndWidth
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
			movement: index * dimensions.wndWidth,
			transitionDuration: `${duration}s`
		})
		transitionTimeout = setTimeout(() => {
			setData({ ...data, transitionDuration: '0s' })
		}, duration * 100)
	}

	const handleClose = e => {
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

	const onModalClick = e => {
		console.log(e.target, modalRef.current)
		if (modalRef.current === e.target) {
			return props.closeBtn()
		}
		return
  }
  
	const formattedCaption = image => {
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
		return formattedCaptionArray.join(' ')
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
					width: '100vw',
					height: '100vh'
				}}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onWheel={handleWheel}>
				<div
					ref={modalRef}
					onClick={onModalClick}
					className='swiper'
					style={{
						transform: `translateX(${movement * -1}px)`,
						transitionDuration: transitionDuration
					}}>
					{props.imgs.map((src, index) => (
						<div
							key={index}
							className={
								src.width > src.height
									? 'img-div-horizontal'
									: 'img-div-vertical'
							}>
							<img
								key={src.image_url}
								src={src.image_url}
								alt={src.description}
								width='100%'
								height='100%'
								className={
									src.width > src.height ? 'img-horizontal' : 'img-vertical'
								}
							/>
							{src.description !== 'undefined' && (
								<p
									className={
										src.width > src.height
											? 'image-caption-horizontal'
											: 'image-caption-vertical'
									}
									style={{
										left:
											src.width > src.height
												? '25px'
												: `${(dimensions.wndWidth -
														dimensions.wndHeight * (src.width / src.height)) /
														2 +
														25}px`
									}}
									dangerouslySetInnerHTML={{ __html: formattedCaption(src) }}
								/>
							)}
						</div>
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
