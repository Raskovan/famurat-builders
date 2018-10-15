import React from "react";
// import "../navbar.css";
import './styles.css';


const Navbar = props => {
  return (
    <header>
      <section>
        <ul>
          <img src={require(`../assets/fb_logo.png`)} alt="Famurat Builders" className="logo" />
          <li><a href="/*">About</a></li>
          <li><a href="/*">Testimonials</a></li>
          <li><a href="/*">Services</a></li>
        </ul>
      </section>
    </header>
  );
};
// <a href="/*" target="_blank">
//   <img src="http://svgshare.com/i/3zm.svg" alt="GitHub Repository" />
// </a>

export default Navbar;
