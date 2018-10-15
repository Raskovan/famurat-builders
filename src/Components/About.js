import React from 'react'
import './about.css';

const  About = () => {
  return (
    <div className="aboutArrow" style={{borderBottom: '15px solid #FFD800'}}>
    <div className="container">
      <div style={{alignSelf: 'center'}}>
      <b>Famurat Builders</b> is a New York based remodeling company owned and managed by Kris Famurat, a fully licensed and insured contractor with 12 years of experience.
      </div>
      <div style={{padding: '0 0 0 30px', float: "right"}}>
        <img src={require(`../assets/about-kris-famurat.jpg`)} alt="W Logo" className="foto" />
      </div>
    </div>
  </div>
  )
}

export default About
