import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import EMR logos
import advancedmdLogo from '../../assets/images/services/advancedmd-logo.jpg';
import athenahealthLogo from '../../assets/images/services/athenahealth-logo.jpg';
import carecloudLogo from '../../assets/images/services/carecloud-logo.jpg';
import eclinicalworksLogo from '../../assets/images/services/eclinicalworks-logo.jpg';
import epicLogo from '../../assets/images/services/epic-logo.jpg';
import nextgenLogo from '../../assets/images/services/nextgen-logo.jpg';

const Emr = () => {
  const ehrLogos = [
    {
      name: "AdvancedMD",
      imgSrc: advancedmdLogo,
      alt: "AdvancedMD Logo"
    },
    {
      name: "Athena Health",
      imgSrc: athenahealthLogo,
      alt: "Athena Health Logo"
    },
    {
      name: "CareCloud",
      imgSrc: carecloudLogo,
      alt: "CareCloud Logo"
    },
    {
      name: "eClinicalWorks",
      imgSrc: eclinicalworksLogo,
      alt: "eClinicalWorks Logo"
    },
    {
      name: "Epic",
      imgSrc: epicLogo,
      alt: "Epic Logo"
    },
    {
      name: "NextGen",
      imgSrc: nextgenLogo,
      alt: "NextGen Logo"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={12} className="text-center">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#002856',
              marginBottom: '1rem',
              position: 'relative'
            }}>
              Transform Your Practice with Medical Virtual Assistants
              <span style={{
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                backgroundColor: '#00A6E6',
                margin: '15px auto 0'
              }}></span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '1200px',
              margin: '0 auto 20px',
              lineHeight: '1.6'
            }}>
              Free your clinicians from admin. Our HIPAA-ready Medical VAs handle scheduling, eligibility checks, prior-auth tracking, patient calls, SMS/portal messages, inbox triage, and EMR data entry—so your team can focus on care.
            </p>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '1200px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Onboard in <span style={{ color: '#002856', fontWeight: '600' }}>3-5 business days</span> with SOPs that match your workflow. Daily reports, QA checks, and a month-to-month engagement make scaling simple.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col lg={12} className="text-center">
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#002856',
              marginBottom: '1.5rem'
            }}>
              Our VA's fully trained on your existing EMR
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '1000px',
              margin: '0 auto 3rem'
            }}>
              Our medical billing specialists know the workarounds of all the EHRs. We help you submit clean claims no matter which EHR you use.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          {ehrLogos.map((logo, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="text-center mb-4">
              <img
                src={logo.imgSrc}
                alt={logo.alt}
                style={{
                  maxWidth: '140px',
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  opacity: '0.7',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.filter = 'grayscale(0)';
                  e.target.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.target.style.filter = 'grayscale(100%)';
                  e.target.style.opacity = '0.7';
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Emr;
