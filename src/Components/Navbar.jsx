import React, { memo } from 'react'
import '../styles/styles.css'

function Navbar() {
	return (
		<div>
			<header>
				<section>
					<div>
						<img
							src={require(`../assets/fb-logo.svg`)}
							alt='Famurat Builders'
							className='logo'
						/>
					</div>
					<div>
						<a
							href='mailto:info@famuratbuilders.com?cc=natalia@famuratbuilders.com, kris@famuratbuilders.com&subject=Estimate Request&body=Please provide some information about your project, such as:%0D%0AWhere is the project located?%0D%0AWhat is the approximate date you wish to start or finish?%0D%0ADo you have architect plans?%0D%0AWill the footprint of the space stay as existing?%0D%0AAre you planning on moving out while the work is done?%0D%0ADoes the project include custom fabrication of Kitchen cabinets or built-in millwork?%0D%0A'
							target='_blank'
							className='myButton'
							rel='noopener noreferrer'>
							{' '}
							Get Estimate{' '}
						</a>
					</div>
				</section>
			</header>
		</div>
	)
}

export default memo(Navbar)