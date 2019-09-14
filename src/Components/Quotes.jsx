import React, { memo } from 'react'
import '../styles/about.css'
import { quotes } from '../assets/quotes-texts'

function Quotes() {
	let randNum = []
	for (let i = 1; i <= 2; i++) {
		let number = Math.round(Math.random() * quotes.length)
		if (!randNum.includes(number)) randNum.push(number)
		else i = i - 1
	}

	let uniqueQuotes = []
	for (var i = 0; i <= randNum.length - 1; i++) {
		if (!uniqueQuotes.includes(quotes[randNum[i]]) && quotes[randNum[i]])
			uniqueQuotes.push(quotes[randNum[i]])
	}

	let allQuotes

	if (uniqueQuotes.length > 0) {
		allQuotes = uniqueQuotes.map((quote, index) => (
			<div className='quote' key={index}>
				<div className='quote-lines'>{quote.split(' / ')[0]}</div>
				<div className='quote-names'>{quote.split(' / ')[1]}</div>
			</div>
		))
	}

	return (
		<div>
			{uniqueQuotes.length > 0 && allQuotes && (
				<div className='container-quotes'>{allQuotes}</div>
			)}
			<div className='logos-header'>Read More About Us Here:</div>
			<div className='container-logos'>
				<a
					href='https://www.yelp.com/biz/famurat-builders-brooklyn-2'
					target='_new'
					className='hide-logo'>
					<img
						id='yelp'
						style={{ width: '10vw' }}
						src={require(`../assets/Yelp_Logo.jpg`)}
						alt='Yelp Logo'
						className='logo'
					/>
				</a>
				<a
					href='https://www.houzz.com/professionals/general-contractors/famurat-builders-llc-pfvwus-pf~1671518338/__public'
					target='_new'>
					<img
						id='houzz'
						style={{ width: '11vw' }}
						src={require(`../assets/Houzz-Logo.jpg`)}
						alt='Houzz Logo'
						className='logo'
					/>
				</a>
				<a
					href='https://www.nytimes.com/2016/12/09/realestate/800-square-feet-and-not-an-inch-wasted.html?rref=collection%2Fsectioncollection%2Frealestate&action=click&contentCollection=realestate&region=rank&module=package&version=highlights&contentPlacement=8&p'
					target='_new'>
					<img
						id='nyt'
						style={{ width: '25vw' }}
						src={require(`../assets/new-york-times-logo.png`)}
						alt='NYT Logo'
						className='logo'
					/>
				</a>
				<a
					href='https://www.thecut.com/2016/01/one-bedroom-co-op-turned-home-for-4.html'
					target='_new'
					className='hide-logo'>
					<img
						id='cut'
						style={{ width: '10vw' }}
						src={require(`../assets/Cut-Logo.jpg`)}
						alt='The Cut Logo'
						className='logo'
					/>
				</a>
				<a
					href='https://blog.sweeten.com/before-after/kitchens/brownstone-kitchen-renovation-prospect-lefferts-gardens/'
					target='_new'>
					<img
						id='sweeten'
						style={{ width: '8vw' }}
						src={require(`../assets/Sweeten_Logo.jpg`)}
						alt='Sweeten Logo'
						className='logo'
					/>
				</a>
			</div>
		</div>
	)
}

export default memo(Quotes)