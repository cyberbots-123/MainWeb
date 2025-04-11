import React from 'react';
import { FaServer, FaLaptopCode, FaCloud, FaCube } from 'react-icons/fa';
import './About2.css';

const About2 = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        {/* Infrastructure Technology Card */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <FaServer className="icon mb-3" style={{ fontSize: '40px', color: '#007bff' }} />
              <h5 className="card-title">Infrastructure Technology</h5>
              <p className="card-text">
                We offer reliable infrastructure technology solutions that ensure your business operates seamlessly with minimal downtime. Our team optimizes your IT resources for maximum performance and scalability.
              </p>
            </div>
          </div>
        </div>

        {/* IT Consultancy & Solution Card */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <FaLaptopCode className="icon mb-3" style={{ fontSize: '40px', color: '#007bff' }} />
              <h5 className="card-title">IT Consultancy & Solution</h5>
              <p className="card-text">
                Our consultancy services help you navigate the complex world of IT. We provide tailored solutions to help you streamline processes, reduce costs, and stay ahead of the competition with the latest technology trends.
              </p>
            </div>
          </div>
        </div>

        {/* Cloud Managed Services Card */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <FaCloud className="icon mb-3" style={{ fontSize: '40px', color: '#007bff' }} />
              <h5 className="card-title">Cloud Managed Services</h5>
              <p className="card-text">
                We offer comprehensive cloud-managed services that allow you to harness the power of the cloud. From migration to ongoing management, we ensure your cloud infrastructure is optimized and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain Technology Card */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <FaCube className="icon mb-3" style={{ fontSize: '40px', color: '#007bff' }} />
              <h5 className="card-title">Blockchain Technology</h5>
              <p className="card-text">
                Explore the world of blockchain technology with us. We provide innovative solutions to integrate blockchain into your business operations, enhancing transparency, security, and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
