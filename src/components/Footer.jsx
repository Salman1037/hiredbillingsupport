import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {
  const quickLinks = [
    { name: "AdvancedMD EHR Software", path: "/advancedmd-ehr-software" },
    { name: "Athena EHR Software", path: "/athena-ehr-software" },
    { name: "CARE CLOUD EHR Software", path: "/care-cloud-ehr-software" },
    { name: "e Clinical Works EMR", path: "/e-clinical-works-emr" },
    { name: "EPIC EHR Software", path: "/epic-ehr-software" },
    { name: "NextGen EHR Software", path: "/nextgen-ehr-software" }
  ];

  const popularServices = [
    { name: "Laboratory Billing Services", path: "/laboratory-billing-services" },
    { name: "Medical Billing Services", path: "/medical-billing-services" },
    { name: "Robotic Process Automation", path: "/robotic-process-automation" },
    { name: "RCM Services", path: "/rcm-services" },
    { name: "Healthcare Credentialing Services", path: "/healthcare-credentialing-services" },
    { name: "Patient Eligibility Verification", path: "/patient-eligibility-verification" },
    { name: "Robotic Process Automation", path: "/robotic-process-automation" },
    { name: "Medical Billing Audit", path: "/medical-billing-audit" }
  ];

  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-lg-4 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Contact Us</h3>
            <p className="text-muted mb-4">Get in touch with us!</p>
            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt className="text-primary mt-1 me-3" style={{ minWidth: '20px' }} />
              <p className="mb-0 text-muted">
                5550 Glades Road Suite 500-1047<br />
                Boca Raton FL 33431
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="text-primary me-3" style={{ minWidth: '20px' }} />
              <a href="mailto:info@hiredbillingsupport.com" className="text-muted text-decoration-none">
                info@hiredbillingsupport.com
              </a>
            </div>
            <div className="d-flex align-items-center mb-4">
              <FaPhone className="text-primary me-3" style={{ minWidth: '20px' }} />
              <a href="tel:+13213211740" className="text-muted text-decoration-none">
                +1 321 321-1740
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="me-3 bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center" 
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <FaFacebookF className="text-primary" />
              </a>
              <a href="#" className="me-3 bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <FaInstagram className="text-primary" />
              </a>
              <a href="#" className="bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <FaLinkedinIn className="text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Quick Links</h3>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services Section */}
          <div className="col-lg-4 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Popular Service</h3>
            <ul className="list-unstyled">
              {popularServices.map((service, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={service.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0" style={{ color: '#00A6E6' }}>
              Copyright © 2025 Hired Billing Support LLC. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy-policy" className="text-decoration-none" style={{ color: '#00A6E6' }}>
              Privacy Policy
            </Link>
            <span className="mx-2" style={{ color: '#00A6E6' }}>|</span>
            <Link to="/terms-conditions" className="text-decoration-none" style={{ color: '#00A6E6' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
