import React from 'react';
import '../styles/intouch.css';

const GetinTouch = () => {
    return (
        <div className="mail-container">
            <div>
            If you need a quote, schedule an appointment or just want to get in touch, please email us!
            </div>
            <div className="btn">
            < a href = "mailto:alexey.katalkin@gmail.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Quote from Famurat Builders&body=Please Give me a Quote"
            target = "_blank"
            className = "bottomBtn"
            rel = 'noopener noreferrer' > Get in Touch! < /a>
            </div>
        </div>
    );
}

export default GetinTouch;
