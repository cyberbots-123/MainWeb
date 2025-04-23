import React, { useEffect } from 'react';
import './Careers1.css';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Careers1 = () => {
  useEffect(() => {
    // Hide the bottom scrollbar on component load
    document.body.style.overflowX = 'hidden'; 

    // Initialize AOS with a duration for the animation
    AOS.init({ duration: 1000 });

    // Restore the scrollbar once the animation is done
    return () => {
      document.body.style.overflowX = 'auto'; 
    };
  }, []);

  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div
            className="col-md-6 text-center text-md-start mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <h3 className="display-4 fw-bold">Your Career Deserves More Than a Title</h3>
            <br />
            <h4 className="display-7 fw-bold">Build a Legacy With CYBERBOTS</h4>
            <br />
            {/* <p className="lead">We Are The People Who Dream & DO</p> */}
            <div>
              {/* <button className="custom-btn custom-btn-primary me-3">About Us</button> */}
              {/* <button className="custom-btn custom-btn-secondary">Vacancies</button> */}
            </div>
          </div>
          {/* Image Section */}
          <div
            className="col-md-6 text-center"
            data-aos="fade-left"
          >
            <img
              src={assets.careerbg}
              alt="Careers Background"
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers1;
