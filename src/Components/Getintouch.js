import React, { PureComponent } from "react";
import "../styles/intouch.css";

class GetinTouch extends PureComponent {
  render() {
    return (
			<div className='mail-container'>
				<div>
					If you would like to schedule an appointment, request an estimate,
					or if you have any question, please email us
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
}

export default GetinTouch;
