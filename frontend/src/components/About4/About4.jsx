import React from 'react';
import './About4.css';
import { assets } from '../../assets/assets';

const About4 = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">REASON TO CHOOSE US</h2>
      <p className="text-center mb-5">
        We provide truly prominent IT solutions.
      </p>

      <div className="row">
        {/* Card 1: Information Management System */}
        <div className="col-md-4 mb-4">
          <div className="card about-card">
            <img src={assets.Abt41} className="card-img" alt="Information Management System" />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-center hover-content">
              <h5 className="card-title text-white">Information Management System</h5>
              <p className="card-text text-white">
                Manage and streamline your information systems to enhance decision-making and operational efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Information Database Security */}
        <div className="col-md-4 mb-4">
          <div className="card about-card">
            <img src={assets.Abt42} className="card-img" alt="Information Database Security" />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-center hover-content">
              <h5 className="card-title text-white">Information Database Security</h5>
              <p className="card-text text-white">
                Secure your valuable data with advanced protection measures to prevent breaches and unauthorized access.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Multifunctional Technology */}
        <div className="col-md-4 mb-4">
          <div className="card about-card">
            <img src={assets.Abt43} className="card-img" alt="Multifunctional Technology" />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-center hover-content">
              <h5 className="card-title text-white">Multifunctional Technology</h5>
              <p className="card-text text-white">
                Embrace cutting-edge multifunctional technology to meet diverse business needs efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
