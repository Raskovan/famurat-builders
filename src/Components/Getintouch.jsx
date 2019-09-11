import React from 'react'
import '../styles/intouch.css'

export default function GetinTouch() {
	return (
		<div className='mail-container'>
			<div style={{ color: 'rgb(18, 38, 71)' }}>
				If you would like to schedule an appointment, request an estimate, or
				ask a question, please email us.
			</div>
			<div className='btn'>
				<a
					href='mailto:info@famuratbuilders.com?cc=natalia@famuratbuilders.com, kris@famuratbuilders.com'
					target='_blank'
					className='bottomBtn'
					rel='noopener noreferrer'>
					{' '}
					Get in Touch{' '}
				</a>
			</div>
		</div>
	)
}
