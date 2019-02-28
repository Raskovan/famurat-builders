import React from "react";
import './styles.css';

// navigator.registerProtocolHandler('web+custom', 'http://localhost:3000/rph?q=%s', 'My App');


const Navbar = props => {
  return (
    <div>
    <header>
      <section>
        <div>
          <img src={require(`../assets/fb-logo.svg`)} alt="Famurat Builders" className="logo" />
          </div>
          <div>< a href = "mailto:alexey.katalkin@gmail.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Quote from Famurat Builders&body=Please Give me a Quote"  target="_blank" className = "myButton" rel='noopener noreferrer' > Request a Quote < /a>
          </div >
      </section>
    </header>
    </div>
  );
};

export default Navbar;
