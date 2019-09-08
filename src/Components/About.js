import React, { PureComponent } from "react";
import "../styles/about.css";

const yearsExp = new Date().getFullYear() - 2000;

class About extends PureComponent {
  render() {
    return (
      <div
        className="aboutArrow"
        style={{ borderBottom: "15px solid rgb(18, 38, 71)" }}
      >
        <div className="container">
          <div style={{ margin: "auto", color: "rgb(18, 38, 71)" }}>
            <b>Famurat Builders</b> is a New York based remodeling company owned
            and managed by Kris Famurat, a fully licensed and insured contractor
            with {yearsExp} years of experience.
          </div>
          <div style={{ padding: "0 0 0 30px", float: "right" }}>
            <img
              src={require(`../assets/about-kris-famurat.jpg`)}
              alt="Kris Famurat"
              className="foto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
