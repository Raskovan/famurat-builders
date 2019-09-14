import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Slides from "./Components/Slides";
import About from './Components/About'
import Quotes from './Components/Quotes'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import Getintouch from './Components/Getintouch'

function App() {
	const [sliderImages, setSliderImages] = useState([])
	const [galleryImages, setGalleryImages] = useState([])

	useEffect(() => {
		fetch('http://res.cloudinary.com/famuratbuilders/image/list/gallery.json')
			.then(res => res.json())
			.then(response => {
				let sliderImages = response.resources.filter(
					img => img.context.custom.placement === 'slider'
				)
				let galleryImages = response.resources.filter(
					img => img.context.custom.placement !== 'slider'
				)
				setSliderImages(sliderImages)
				setGalleryImages(galleryImages)
			})
			.catch(error => console.error('Error:', error))
	}, [])

	return (
		<div>
			<Navbar />
      <Slides images={sliderImages} />
			<About />
      <Gallery images={galleryImages} />
			<Quotes />
			<Getintouch />
			<Footer />
		</div>
	)
}

export default App
