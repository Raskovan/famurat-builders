import React, { PureComponent } from "react";
import "./styles.css";

// navigator.registerProtocolHandler('web+custom', 'http://localhost:3000/rph?q=%s', 'My App');

class Navbar extends PureComponent {
  render() {
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
								href='mailto:info@famuratbuilders.com?cc=natalia@famuratbuilders.com, kris@famuratbuilders.com&subject=Estimate Request&body=Please provide some information about your project, such as: location, start/finish date, do you have architect plans?, will the footprint of the space stay as existing?, are you planning on moving out while the work is done?, does the project include custom fabrication of Kitchen cabinets or built-in millwork?'
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
}

export default Navbar;
