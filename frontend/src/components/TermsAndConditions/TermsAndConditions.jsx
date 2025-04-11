import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <h2 className="mb-4 text-center">Terms and Conditions</h2>
      <div className="accordion" id="termsAccordion">

        {/* Services Provided */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              1. Services Provided
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Sale of electronic components and DIY kits</li>
                <li>Online and offline technical courses</li>
                <li>Event organization and competition hosting</li>
                <li>Registration for workshops, technical camps, and project-based learning</li>
                <li>Franchise and institutional collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              2. User Responsibilities
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Provide accurate and updated personal information during registration or purchases.</li>
                <li>Maintain confidentiality of your account credentials.</li>
                <li>Use our website only for lawful purposes and not for any fraudulent activities.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              3. Payment Terms
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>All payments made on our platform are secure and handled via trusted payment gateways.</li>
                <li>Prices are subject to change without prior notice.</li>
                <li>Registration/participation is confirmed only upon receipt of payment.</li>
                <li>No cash refunds for digital/downloadable products, online courses, or attended events.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping and Delivery */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              4. Shipping and Delivery
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Dispatch within 3–7 working days from order date.</li>
                <li>Delivery timelines vary by location and courier availability.</li>
                <li>Shipping charges will be displayed at checkout.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellations and Refunds */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              5. Cancellations and Refunds
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Orders can be cancelled within 24 hours if not dispatched.</li>
                <li>Event registrations are non-refundable but may be substituted/rescheduled.</li>
                <li>Contact support for issues with digital content access.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              6. Intellectual Property
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              All content including logos, course materials, images, and event formats are property of Cyberbots and cannot be reused without written permission.
            </div>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              7. Code of Conduct for Courses and Events
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Maintain respectful behavior in all sessions.</li>
                <li>Do not share course materials or login details.</li>
                <li>Avoid unauthorized or commercial use of content.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              8. Limitation of Liability
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>No liability for personal injuries or accidents during use of products/events.</li>
                <li>Not responsible for indirect, incidental, or consequential damages.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              9. Privacy Policy
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              By using our services, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              10. Changes to Terms
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              We may modify these Terms at any time. Continued use of our site implies acceptance of changes.
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              11. Contact Us
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#termsAccordion"
          >
            <div className="accordion-body">
              Cyberbots<br />
              Email: <a href="mailto:info@cyberbots.in">info@cyberbots.in</a><br />
              Phone: 7358039311<br />
              {/* Website: <a href="https://www.cyberbots.in" target="_blank">www.cyberbots.in</a> */}
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
