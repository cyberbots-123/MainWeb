import React from 'react';
import './About3.css';
import { assets } from '../../assets/assets';

const About3 = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 mb-4">
          <h2 className="display-4">Who We Are</h2>
          <p className="lead">
            Highly Tailored IT Design, Management & Support Services.
          </p>
          <p>
            Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.
          </p>
        </div>

        {/* Image */}
        <div className="col-md-6 mb-4">
          <img 
            src={assets.Abt3} 
            alt="About Us" 
            className="img-fluid rounded shadow" 
          />
        </div>
      </div>
    </div>
  );
}

export default About3;
