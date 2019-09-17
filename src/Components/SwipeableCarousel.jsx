import React, { Component } from 'react'

import '../styles/swipeable.css'

const IMG_WIDTH = window.innerWidth
const IMG_HEIGHT = window.innerHeight

class SwipeableCarousel extends Component {
	wheelTimeout
	transitionTimeout
	lastTouch = 0
	state = {
		currentIndex: 0,
		movement: 0,
		transitionDuration: '0s'
	}
	componentWillUnmount = () => {
		clearTimeout(this.transitionTimeout)
	}

	handleWindowClick = e => {
		console.log('click', e.target)
	}

	handleTouchStart = e => {
		this.lastTouch = e.nativeEvent.touches[0].clientX
	}
	handleTouchMove = e => {
		const delta = this.lastTouch - e.nativeEvent.touches[0].clientX
		this.lastTouch = e.nativeEvent.touches[0].clientX
		this.handleMovement(delta)
	}
	handleTouchEnd = () => {
		this.handleMovementEnd()
		this.lastTouch = 0
	}
	handleWheel = e => {
		clearTimeout(this.wheelTimeout)
		this.handleMovement(e.deltaX)
		this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100)
	}
	handleMovement = delta => {
		clearTimeout(this.transitionTimeout)

		this.setState(state => {
			const maxLength = this.props.imgs.length - 1

			let nextMovement = state.movement + delta

			if (nextMovement < 0) {
				nextMovement = 0
			}

			if (nextMovement > maxLength * IMG_WIDTH) {
				nextMovement = maxLength * IMG_WIDTH
			}

			return {
				movement: nextMovement,
				transitionDuration: '0s'
			}
		})
	}

	handleMovementEnd = () => {
		const { movement, currentIndex } = this.state

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

		this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)))
	}

	transitionTo = (index, duration) => {
		this.setState({
			currentIndex: index,
			movement: index * IMG_WIDTH,
			transitionDuration: `${duration}s`
		})

		this.transitionTimeout = setTimeout(() => {
			this.setState({ transitionDuration: '0s' })
		}, duration * 1000)
	}
	render() {
		const { currentIndex, movement, transitionDuration } = this.state
		const maxLength = this.props.imgs.length - 1
		const maxMovement = maxLength * IMG_WIDTH

		return (
			<>
				<div className='close-button'>
					<img
						className='close-image'
						src={require(`../assets/close.svg`)}
						alt='Closw Button'
						onClick={this.props.closeBtn}
					/>
				</div>
				<div
					className='main'
					style={{
						width: `${IMG_WIDTH}px`,
						height: `${IMG_HEIGHT}px`
					}}
					onTouchStart={this.handleTouchStart}
					onTouchMove={this.handleTouchMove}
					onTouchEnd={this.handleTouchEnd}
					onWheel={this.handleWheel}>
					<div
						className='swiper'
						style={{
							transform: `translateX(${movement * -1}px)`,
							transitionDuration: transitionDuration
						}}>
						{this.props.imgs.map(src => (
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
								this.transitionTo(currentIndex - 1, 0.5)
							}}>
							{'<'}
						</div>
					)}
					{movement !== maxMovement && (
						<div
							className='next move'
							onClick={() => {
								this.transitionTo(currentIndex + 1, 0.5)
							}}>
							>
						</div>
					)}
				</div>
			</>
		)
	}
}

export default SwipeableCarousel
