import React from 'react';
import "./About1.css";
import { assets } from '../../assets/assets'; // Ensure assets.Abt1 has the correct path to the image

const About1 = () => {
  return (
    <div
      className="about-container d-flex align-items-center"
      style={{ backgroundImage: `url(${assets.Abt1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container text-white">
        <div className="row justify-content-start">
          <div className="col-md-6">
            <h1 className="title">Technology Related Consultancy</h1>
            <h2 className="subtitle">We transform ideas into technology</h2>
            <p className="description">
              We provide the most responsive and functional IT design for companies and businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
