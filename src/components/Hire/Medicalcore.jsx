import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCalendarCheck, BsPersonCheck, BsShieldCheck, BsJournalText, 
  BsLaptop, BsChatDots, BsInbox, BsGraphUp } from 'react-icons/bs';

const Medicalcore = () => {
  const services = [
    {
      icon: <BsCalendarCheck size={40} />,
      title: "Patient Scheduling",
      description: "High-volume inbound/outbound scheduling, rescheduling, and recalls with no-show reduction."
    },
    {
      icon: <BsPersonCheck size={40} />,
      title: "Insurance Verification",
      description: "Real-time eligibility & benefits checks; document co-pays, deductibles, and coverage notes."
    },
    {
      icon: <BsShieldCheck size={40} />,
      title: "Prior Authorizations",
      description: "Gather clinicals, submit PAs, and track approvals; proactive follow-ups to prevent delays."
    },
    {
      icon: <BsJournalText size={40} />,
      title: "Medical Scribing (Live/Async)",
      description: "Chart in real time or from recordings; templates/macros aligned to your specialty & EHR."
    },
    {
      icon: <BsLaptop size={40} />,
      title: "EHR Data Entry & Cleanup",
      description: "Problem lists, meds, allergies, labs, orders, inbox triage—entered consistently and on time."
    },
    {
      icon: <BsChatDots size={40} />,
      title: "Patient Communication",
      description: "Phone/SMS/portal messages, appointment reminders, pre-visit instructions, and recalls."
    },
    {
      icon: <BsInbox size={40} />,
      title: "Provider Inbox & Referrals",
      description: "Fax/portal processing, refills, referrals, and results routing with audit-ready logs."
    },
    {
      icon: <BsGraphUp size={40} />,
      title: "QA & Reporting",
      description: "Daily productivity/accuracy reports; spot checks and workflow improvements you can track."
    }
  ];

  return (
    <section style={{ backgroundColor: '#00A6E6', padding: '80px 0' }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={10}>
            <h2 className="display-4 fw-bold text-white mb-4">
              Our Core Services
            </h2>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: '80px', height: '4px', backgroundColor: 'white' }}></div>
            </div>
            <p className="text-white mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Medical Billing Services by us enables healthcare providers to concentrate on giving incredible consideration. Through observing the SOPs of each practice and following them diligently, we find the best and most effective billings to keep your practice going smoothly. With you focused on patient experience, we engage in billing and coding to aid your business.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col lg={3} md={6} sm={6} key={index}>
              <div className="text-center p-4 h-100" style={{ 
                backgroundColor: 'white', 
                borderRadius: '15px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div className="mb-4" style={{ 
                  color: '#00A6E6',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {service.icon}
                </div>
                <h4 className="mb-3" style={{ 
                  color: '#002856',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  lineHeight: '1.4',
                  minHeight: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {service.title}
                </h4>
                <p className="text-muted mb-0" style={{ 
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {service.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Medicalcore;
