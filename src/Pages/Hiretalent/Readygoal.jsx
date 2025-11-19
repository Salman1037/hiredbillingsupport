import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import medicalReceptionist from '../../assets/images/avatar/medical-receptionist.png';
import medicalCoder from '../../assets/images/avatar/medical-coder.png';
import medicalScribe from '../../assets/images/avatar/team-3.png';
import eligibilitySpecialist from '../../assets/images/avatar/eligibility-specialist.png';
import billingCoordinator from '../../assets/images/avatar/billing-coordinator.png';
import billingSpecialist from '../../assets/images/avatar/team-2.png';
import priorAuthCoordinator from '../../assets/images/avatar/prior-auth-coordinator.png';
import patientIntakeCoordinator from '../../assets/images/avatar/patient-intake-coordinator.png';
import insuranceVerification from '../../assets/images/avatar/team-1.png';

const Readygoal = () => {
  const roles = [
    {
      image: medicalReceptionist,
      title: "Medical Receptionist",
      description: "Answers phones, triages inquiries, books/reschedules visits, and sends reminders/messages."
    },
    {
      image: medicalCoder,
      title: "Medical Coder",
      description: "Applies accurate ICD-10/CPT/HCPCS codes and modifiers, ensuring medical necessity and payer compliance."
    },
    {
      image: medicalScribe,
      title: "Medical Scribe",
      description: "Charts in real time during telehealth or in-person visits—histories, ROS, orders, and templated notes in the EHR."
    },
    {
      image: eligibilitySpecialist,
      title: "Eligibility Specialist",
      description: "Verifies benefits, copays/deductibles, COB, frequencies, and documents coverage limits in the chart."
    },
    {
      image: billingCoordinator,
      title: "Medical Billing Coordinator",
      description: "Monitors charge-to-cash, posts payments, reconciles ledgers, and resolves payment discrepancies."
    },
    {
      image: billingSpecialist,
      title: "Medical Billing Specialist",
      description: "Prepares and submits claims, clears rejections, posts ERA/EOBs, and manages refunds/adjustments."
    },
    {
      image: priorAuthCoordinator,
      title: "Prior Authorization Coordinator",
      description: "Gathers clinicals and submits PAs/predeterminations, tracks decisions and updates providers."
    },
    {
      image: patientIntakeCoordinator,
      title: "Patient Intake Coordinator",
      description: "Pre-registers patients, confirms demographics/insurance, collects consents, and organizes histories."
    },
    {
      image: insuranceVerification,
      title: "Insurance Verification Specialist",
      description: "Confirms coverage and plan rules, flags pre-auths/referrals, exclusions, and notes requirements."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container className="px-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Row className="justify-content-center mb-4">
          <Col lg={10} className="text-center">
            <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Scale Your Practice with Ready-to-Go VAs
            </h2>
            <p className="text-muted mb-5">
              Access rigorously screened, HIPAA-aligned medical VAs and specialists who slot into your workflows fast and keep operations moving.
            </p>
          </Col>
        </Row>

        {roles.map((role, index) => (
          <Row key={index} className="align-items-center mb-4">
            <Col lg={2} md={3} className="text-center">
              <img
                src={role.image}
                alt={role.title}
                className="img-fluid rounded-circle"
                style={{ 
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '3px solid #f8f9fa'
                }}
              />
            </Col>
            <Col lg={10} md={9}>
              <h3 style={{ 
                color: '#002856', 
                fontSize: '1.5rem', 
                fontWeight: '700',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: '0.5rem'
              }}>
                {role.title}
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                {role.description}
              </p>
            </Col>
          </Row>
        ))}
        
        <Row className="justify-content-center mt-4">
          <Col className="text-center">
            <button 
              className="btn btn-success px-5 py-3 rounded-pill"
              style={{
                backgroundColor: '#00d084',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Started from $10/Hr
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Readygoal;
