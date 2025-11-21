import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const caseStudyData = {
  'dr-alan-j-dayan': {
    name: 'Dr. Alan J Dayan',
    specialty: 'Orthopedic Surgery',
    title: 'Remote Staffing Excellence for an Orthopedic Practice',
    description: 'Alan J. Dayan, MD is a board-certified, fellowship-trained orthopedic surgeon with expertise in adult joint reconstructive surgery. Dr. Dayan received his medical degree at the Albert Einstein College of Medicine in New York. The Guardian of the Sick in Brooklyn, New York proclaimed Dr. Dayan as "Physician of the Year" in 1996 and he is distinguished as a Fellow of the American Academy of Orthopedic Surgery.',
    cta: 'See how HBS can help your orthopedic practice >',
    challenges: {
      title: 'Administrative Burden Growing',
      content: 'Dr. Alan runs a successful orthopedic practice. With his esteemed reputation, his patient load doubled, creating administrative challenges that required additional staffing. Managing billing, coding, and administrative tasks in-house was consuming valuable resources and time that could be better spent on patient care.'
    },
    quote: '"We needed to find a cost-effective staffing solution that could handle our growing administrative workload without the overhead of hiring full-time employees. HBS has been instrumental in allowing us to scale efficiently."',
    section2Title: 'Time Is of the Essence',
    section2Content: 'Time was a critical factor. Dr. Alan needed to ensure that his practice could handle the increased patient volume without compromising service quality. Growing pains required immediate and scalable solutions for billing and administrative tasks.',
    section3Title: 'The Search for Solutions',
    section3Content: 'Dr. Alan actively looked for remote staffing solutions that could provide specialized support for orthopedic practices. He needed experienced medical billing specialists and coders who understood orthopedic coding complexities. He was concerned about finding reliable partners who could integrate seamlessly with his practice operations and maintain the quality of service his patients expected.',
    section3Subtitle: 'Discovering HBS',
    section3SubContent: 'Dr. Alan connected with HBS (Hired Billing Support) and shared his specific needs and concerns. After learning about HBS\'s approach to remote staffing and seeing how their team could support his practice, he was impressed with their expertise in healthcare billing and their commitment to understanding orthopedic-specific challenges.',
    testimonial: '"HBS provided us with exceptional remote billing and administrative support that transformed our practice. Their team\'s expertise and reliability have been invaluable. The remote staffing model has allowed us to scale our operations efficiently without the overhead of in-house staff. Our revenue cycle has improved significantly, and we\'ve been able to focus more on patient care."',
    doctorName: 'Dr. Alan J Dayan',
    conclusion: 'Dr. Alan chose HBS for his remote staffing needs and his workflows have become much more efficient. His practice has experienced significant improvements in billing accuracy, faster claims processing, and reduced administrative burden. The partnership with HBS has allowed Dr. Alan to focus on what he does best – providing excellent orthopedic care to his patients. Dr. Alan has been a satisfied HBS client and continues to benefit from their reliable remote staffing solutions.'
  },
  'dr-harmesh-naik': {
    name: 'Dr. Harmesh Naik',
    specialty: 'Oncology',
    title: 'Remote Staffing Solutions for a Busy Oncology Practice',
    description: 'Dr. Harmesh Naik is an experienced oncologist dedicated to providing comprehensive cancer care to his patients. With a thriving oncology practice, Dr. Naik manages complex billing requirements unique to oncology treatments and ensures every patient receives the best possible care.',
    cta: 'See how HBS can help your oncology practice >',
    challenges: {
      title: 'Managing Complex Oncology Billing',
      content: 'Running an oncology practice involves managing complex billing codes, insurance claims, and regulatory requirements. Dr. Naik\'s practice needed specialized expertise in oncology billing to ensure accurate claims and optimal reimbursement while maintaining focus on patient care.'
    },
    quote: '"Oncology billing is highly complex with multiple treatment codes and insurance requirements. Finding a staffing solution that understands these complexities was crucial for our practice success."',
    section2Title: 'Specialized Expertise Required',
    section2Content: 'Oncology billing requires deep knowledge of specialized codes, combination therapies, and insurance authorization processes. Dr. Naik needed a team that could handle these complexities accurately and efficiently.',
    section3Title: 'The Search for Specialized Support',
    section3Content: 'Dr. Naik looked for remote staffing partners with specific oncology billing expertise. He needed a team that could manage the intricacies of cancer treatment billing and improve the practice\'s clean claim rate.',
    section3Subtitle: 'Partnership with HBS',
    section3SubContent: 'HBS stepped in with their specialized oncology billing expertise. Their team has extensive experience with oncology coding, treatment protocols, and insurance requirements specific to cancer care.',
    testimonial: '"Working with HBS has been a game-changer for our oncology practice. Their team\'s expertise in oncology-specific billing has helped us achieve a 98% clean claim rate. The improvement in our revenue cycle has been remarkable, and we\'ve gained back precious time to focus on patient care and treatment planning."',
    doctorName: 'Dr. Harmesh Naik',
    conclusion: 'Dr. Naik\'s partnership with HBS has transformed his practice\'s financial operations. With expert remote oncology billers and coders handling the complex coding and claims management, the practice has seen dramatic improvements in revenue cycle efficiency and claim approval rates. Dr. Naik can now dedicate more time to his patients while HBS ensures the business side of the practice runs smoothly.'
  },
  'dr-afreen-sheikh': {
    name: 'Dr. Afreen Sheikh',
    specialty: 'Internal Medicine',
    title: 'Scaling Internal Medicine Practice with Remote Support',
    description: 'Dr. Afreen Sheikh is an internal medicine physician committed to providing comprehensive primary care. Managing a growing internal medicine practice requires balancing patient care with administrative responsibilities.',
    cta: 'See how HBS can help your internal medicine practice >',
    challenges: {
      title: 'Internal Administrative Overload',
      content: 'As an internal medicine practice grows, so do administrative tasks. Dr. Sheikh\'s practice faced challenges managing billing, coding, insurance denials, and follow-ups while maintaining the quality of patient care that defines the practice.'
    },
    quote: '"Patient care is what I\'m passionate about. When administrative work takes away from that, it\'s time to find better solutions. We needed remote support we could trust."',
    section2Title: 'Focus on Patient Care',
    section2Content: 'Dr. Sheikh wanted to ensure that administrative duties didn\'t compromise the quality time spent with patients. Internal medicine requires comprehensive patient interactions, and administrative burden can detract from this.',
    section3Title: 'The Search for Reliable Support',
    section3Content: 'Dr. Sheikh looked for a remote staffing partner that could handle internal medicine billing and administrative tasks professionally and reliably. The solution needed to integrate seamlessly with the practice.',
    section3Subtitle: 'Choosing HBS',
    section3SubContent: 'HBS provided the professional remote support Dr. Sheikh\'s practice needed. Their team handles billing, coding, and administrative tasks with expertise in internal medicine coding and compliance.',
    testimonial: '"HBS\'s remote staffing solution has freed up our internal resources to focus on patient care. Their team is professional, responsive, and truly understands the complexities of medical billing and coding. We\'ve seen improvements in our claims processing and overall practice efficiency."',
    doctorName: 'Dr. Afreen Sheikh',
    conclusion: 'With HBS handling the administrative and billing side of the practice, Dr. Sheikh can focus on what matters most – delivering excellent internal medicine care to patients. The practice has experienced smoother operations, better billing accuracy, and improved staff morale as the team is no longer overwhelmed by administrative tasks.'
  },
  'nagwa-s-awad': {
    name: 'Nagwa S. Awad',
    specialty: 'Genesis Internal Medicine',
    title: 'Building Efficiency Through Remote Staffing Partnership',
    description: 'Nagwa S. Awad leads Genesis Internal Medicine, a multi-provider internal medicine practice dedicated to comprehensive patient care and operational excellence.',
    cta: 'See how HBS can help your practice >',
    challenges: {
      title: 'Operational Efficiency at Scale',
      content: 'Managing a multi-provider internal medicine practice requires coordination of billing, coding, and administrative functions across multiple departments. Genesis Internal Medicine needed to find ways to accomplish more without increasing overhead costs.'
    },
    quote: '"We wanted to grow our practice and improve efficiency without the burden of hiring more in-house staff. Remote staffing seemed like the right approach, but we needed the right partner."',
    section2Title: 'Scaling Operations Efficiently',
    section2Content: 'For a multi-provider practice, operational efficiency is critical. Genesis Internal Medicine needed a staffing solution that could scale with the practice while maintaining quality and reducing costs.',
    section3Title: 'Finding the Right Partner',
    section3Content: 'Genesis Internal Medicine searched for a remote staffing solution that could handle the complexity of multi-provider billing and administrative coordination. They needed a partner with experience in practice operations and internal medicine billing.',
    section3Subtitle: 'Partnership with HBS',
    section3SubContent: 'HBS provided Genesis Internal Medicine with a remote team that integrates seamlessly with their operations. HBS team members work as extensions of the internal team, handling billing, coding, and administrative tasks.',
    testimonial: '"We\'ve been able to accomplish significantly more with less overhead by utilizing HBS\'s remote staffing services. Their team members integrate seamlessly with our operations and provide exceptional service. It\'s like having experienced staff members without the traditional employment costs."',
    doctorName: 'Nagwa S. Awad',
    conclusion: 'Genesis Internal Medicine has transformed its operational model through its partnership with HBS. By leveraging remote staffing expertise, the practice has improved efficiency, reduced overhead costs, and maintained high service quality. The remote team supports the practice\'s growth without requiring significant capital investment in facilities or long-term employment commitments.'
  }
};

export default function HBSCaseStudy() {
  const { slug } = useParams();
  const caseStudy = caseStudyData[slug] || caseStudyData['dr-alan-j-dayan'];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    practiceName: '',
    phone: '',
    email: '',
    providers: '',
    specialty: '',
    solutions: {
      billing: false,
      coding: false,
      denialManagement: false,
      staffing: false,
      credentialing: false,
      receivables: false,
      compliance: false,
      consultation: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      solutions: { ...prev.solutions, [name]: checked }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header Section */}
      <div style={{ background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', color: 'white', padding: '60px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#f39c12', padding: '10px 20px', transform: 'rotate(45deg)', transformOrigin: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>SUCCESS</span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>HBS</div>
              </div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '15px',color:"white" }}>
                {caseStudy.title}
              </h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#d4f1f4' }}>
                {caseStudy.specialty}, {caseStudy.name}
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '700px' }}>
                {caseStudy.description}
              </p>
              <a href="#" style={{ color: "white", textDecoration: 'none', marginTop: '15px', display: 'inline-block' }}>
                {caseStudy.cta}
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '5px solid white', background: '#f5f5f5' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#666', textAlign: 'center', padding: '20px' }}>
                  <div>
                    <div style={{ fontSize: '48px', marginBottom: '10px' }}>👨‍⚕️</div>
                    <div><strong>{caseStudy.name}</strong></div>
                    <div style={{ fontSize: '12px' }}>{caseStudy.specialty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>{caseStudy.challenges.title}</h2>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              {caseStudy.challenges.content}
            </p>
            <p style={{ fontStyle: 'italic', color: '#666', borderLeft: '3px solid #5CBDAA', paddingLeft: '15px', marginTop: '20px' }}>
              {caseStudy.quote}
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div style={{ background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', padding: '40px', borderRadius: '10px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '80px', opacity: '0.3' }}>💼📈💡</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container my-5">
        <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>{caseStudy.section2Title}</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>
          {caseStudy.section2Content}
        </p>
      </div>

      {/* Section 3 */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '10px' }}>
              <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎯</div>
              <div style={{ fontSize: '60px', opacity: '0.5' }}>✓</div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>{caseStudy.section3Title}</h2>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              {caseStudy.section3Content}
            </p>
            <h3 style={{ color: '#5CBDAA', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>{caseStudy.section3Subtitle}</h3>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              {caseStudy.section3SubContent}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Quote */}
      <div style={{ background: '#5CBDAA', color: 'white', padding: '40px 0', margin: '50px 0' }}>
        <div className="container text-center">
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', margin: '0' }}>
            {caseStudy.testimonial}
          </p>
          <p style={{ marginTop: '15px', fontWeight: 'bold' }}>- {caseStudy.doctorName}</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="container my-5">
        <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>Conclusion</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>
          {caseStudy.conclusion}
        </p>
      </div>

      {/* Contact Form */}
      <div style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: '#5CBDAA', fontSize: '2rem' }}>Get A Free Assessment & Quote</h2>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name*</label>
                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last name*</label>
                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Practice name*</label>
                <input type="text" className="form-control" name="practiceName" value={formData.practiceName} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone number*</label>
                <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email*</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Number of Providers*</label>
                <input type="number" className="form-control" name="providers" value={formData.providers} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Specialty*</label>
              <select className="form-select" name="specialty" value={formData.specialty} onChange={handleInputChange} required>
                <option value="">Please Select</option>
                <option value="orthopedic">Orthopedic Surgery</option>
                <option value="oncology">Oncology</option>
                <option value="internal">Internal Medicine</option>
                <option value="family">Family Medicine</option>
                <option value="cardiology">Cardiology</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label mb-3">Services of Interest</label>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="billing" checked={formData.solutions.billing} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Medical Billing</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="coding" checked={formData.solutions.coding} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Medical Coding</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="denialManagement" checked={formData.solutions.denialManagement} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Denial Management</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="staffing" checked={formData.solutions.staffing} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Remote Staffing</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="credentialing" checked={formData.solutions.credentialing} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Credentialing</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="receivables" checked={formData.solutions.receivables} onChange={handleCheckboxChange} />
                    <label className="form-check-label">A/R Management</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="compliance" checked={formData.solutions.compliance} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Compliance Support</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="consultation" checked={formData.solutions.consultation} onChange={handleCheckboxChange} />
                    <label className="form-check-label">Consultation</label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-warning btn-lg px-5 py-3" style={{ background: '#f39c12', border: 'none', fontWeight: 'bold' }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#1e1e1e', color: 'white', padding: '30px 0', fontSize: '0.9rem' }}>
        <div className="container text-center">
          <p className="mb-2">© 2025 Hired Billing Support</p>
          <div>
            <a href="#" style={{ color: '#5CBDAA', textDecoration: 'none', marginRight: '20px' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#5CBDAA', textDecoration: 'none' }}>Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
