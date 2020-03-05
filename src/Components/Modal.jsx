import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import '../styles/modal.css'
import SwipeableCarousel from './SwipeableCarousel'

function Modal(props) {
  const modalRef = useRef()
  const showHideClassName = props.modal
    ? 'modal display-block'
    : 'modal display-none'

  const images = []
  const baseurl = 'https://res.cloudinary.com/famuratbuilders/image/upload/'
  const query =
    '(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
  const ratio = matchMedia(query).matches ? 2 : 1
  const width = window.innerWidth
  const imageWidth = width * ratio
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

  return (
    <div className={showHideClassName} ref={modalRef}>
      <SwipeableCarousel imgs={images} closeBtn={props.handleClose} />
    </div>
  )
}

Modal.propTypes = {
  modal: PropTypes.bool,
  handleClose: PropTypes.func,
  images: PropTypes.array
}

export default memo(Modal)
