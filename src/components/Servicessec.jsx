import React from 'react';
import './Servicessec.css';
import { FaFileInvoiceDollar, FaChartLine, FaHospital, FaRegListAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdVerifiedUser, MdManageAccounts } from 'react-icons/md';
import { BsPersonCheck } from 'react-icons/bs';

const Servicessec = () => {
  const services = [
    {
      id: 1,
      icon: FaFileInvoiceDollar,
      title: 'Medical Billing Services',
      description: 'Expert medical billing services designed to optimize revenue, reduce errors, and streamline your practice\'s financial operations.',
    },
    {
      id: 2,
      icon: FaChartLine,
      title: 'Revenue Cycle Management',
      description: 'Comprehensive revenue cycle management to enhance collections, minimize denials, and ensure timely reimbursements.',
    },
    {
      id: 3,
      icon: MdManageAccounts,
      title: 'Practice Management',
      description: 'Efficient practice management solutions to streamline operations, improve workflow, and enhance overall practice productivity.',
    },
    {
      id: 4,
      icon: FaHospital,
      title: 'Front Office Management',
      description: 'Front office management services to improve patient scheduling, billing processes, and overall office efficiency.',
    },
    {
      id: 5,
      icon: FaRegListAlt,
      title: 'Medical Transcription Services',
      description: 'Accurate and timely medical transcription services to ensure precise documentation and enhance clinical efficiency.',
    },
    {
      id: 6,
      icon: BsPersonCheck,
      title: 'Patient Benefits & Eligibility Verification',
      description: 'Reliable patient benefits and eligibility verification services to confirm coverage and prevent claim denials.',
    },
    {
      id: 7,
      icon: MdVerifiedUser,
      title: 'Credentialing Services',
      description: 'Comprehensive credentialing services to ensure provider compliance, streamline approvals, and expedite the onboarding process.',
    },
    {
      id: 8,
      icon: MdHealthAndSafety,
      title: 'AR Management',
      description: 'Expert AR management services focused on reducing outstanding balances, accelerating collections, and improving overall cash flow efficiency.',
    },
  ];

  return (
    <section className="rcm-services-section">
      <div className="rcm-container">
        <div className="rcm-services-header">
          <h2>Full Suite of RCM Solutions</h2>
          <p>Drive non-efficiency and elevate the patient experience with our comprehensive end-to-end revenue cycle management services.</p>
        </div>
        <div className="rcm-services-grid">
          {services.map((service) => (
            <div key={service.id} className="rcm-service-card">
              <div className="rcm-service-icon">
                {React.createElement(service.icon, { className: 'rcm-service-icon-svg' })}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="rcm-read-more">READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicessec;
