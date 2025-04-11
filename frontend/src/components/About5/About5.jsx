import React, { useEffect, useState, useRef } from 'react';
import './About5.css';

const About5 = () => {
  const [rates, setRates] = useState({
    itManagement: 0,
    dataSecurity: 0,
    informationTechnology: 0,
    technologyConsultant: 0,
  });

  const sectionRef = useRef(null); // Reference for the section to observe

  // Dynamically load the progress values when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRates({
            itManagement: 90,
            dataSecurity: 85,
            informationTechnology: 80,
            technologyConsultant: 95,
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container my-5" ref={sectionRef}>
      <div className="row align-items-center">
        {/* Left Section: Highlighted 25 Years of Experience */}
        <div className="col-md-4 text-center">
          <div className="highlighted-banner mx-auto d-flex flex-column align-items-center justify-content-center">
            <h1 className="highlighted-number">25</h1>
            <p className="highlighted-text">Years of Excellence</p>
          </div>
          <p className="mt-3 text-muted">
            Preparing for your success, we provide truly prominent IT solutions.
          </p>
        </div>

        {/* Right Section: Progress Bars */}
        <div className="col-md-8">
          <div className="row">
            <div className="col-12 mb-4">
              <h5>IT Management</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${rates.itManagement}%` }}
                  aria-valuenow={rates.itManagement}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {rates.itManagement}%
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <h5>Data Security</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${rates.dataSecurity}%` }}
                  aria-valuenow={rates.dataSecurity}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {rates.dataSecurity}%
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <h5>Information Technology</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: `${rates.informationTechnology}%` }}
                  aria-valuenow={rates.informationTechnology}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {rates.informationTechnology}%
                </div>
              </div>
            </div>

            <div className="col-12">
              <h5>Technology Consultant</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: `${rates.technologyConsultant}%` }}
                  aria-valuenow={rates.technologyConsultant}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {rates.technologyConsultant}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
