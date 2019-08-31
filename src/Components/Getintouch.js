import React, { PureComponent } from "react";
import "../styles/intouch.css";

class GetinTouch extends PureComponent {
  render() {
    return (
			<div className='mail-container'>
				<div>
					If you need a quote, schedule an appointment or just want to get
					in touch, please email us!
				</div>
				<div className='btn'>
					<a
						href='mailto:info@famuratbuilders.com?cc=natalia@famuratbuilders.com, kris@famuratbuilders.com'
						target='_blank'
						className='bottomBtn'
						rel='noopener noreferrer'>
						{' '}
						Get in Touch!{' '}
					</a>
				</div>
			</div>
		)
  }
}

export default GetinTouch;
