import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      name: "Dr. Alan J Dayan",
      specialty: "Orthopedic",
      testimonial: "HBS provided us with exceptional remote billing support that transformed our practice. Their team's expertise and reliability have been invaluable to our operations. The remote staffing model has allowed us to scale without the overhead.",
      buttonText: "Read More",
      initial: "D",
      slug: "dr-alan-j-dayan"
    },
    {
      id: 2,
      name: "Dr. Harmesh Naik",
      specialty: "Oncology",
      testimonial: "Working with HBS has been a game-changer for our oncology practice. Their remote billers and coders are highly skilled and dedicated. They've helped us achieve a 98% clean claim rate and significantly improved our revenue cycle.",
      buttonText: "Read More",
      initial: "N",
      slug: "dr-harmesh-naik"
    },
    {
      id: 3,
      name: "Dr. Afreen Sheikh",
      specialty: "Internal Medicine",
      testimonial: "HBS's remote staffing solution has freed up our internal resources to focus on patient care. Their team is professional, responsive, and truly understands the complexities of medical billing and coding.",
      buttonText: "Read More",
      initial: "S",
      slug: "dr-afreen-sheikh"
    },
    {
      id: 4,
      name: "Nagwa S. Awad",
      specialty: "Genesis Internal Medicine",
      testimonial: "We've been able to accomplish significantly more with less overhead by utilizing HBS's remote staffing services. Their team members integrate seamlessly with our operations and provide exceptional customer service.",
      buttonText: "Read More",
      initial: "A",
      slug: "nagwa-s-awad"
    }
  ];

  return (
    <div className="case-studies-page">
      <style>{`
        .case-studies-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #f8f9fa;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveBackground 20s linear infinite;
        }

        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(253, 183, 20, 0.1) 0%, transparent 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section h1 {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 24px;
          text-shadow: 2px 4px 8px rgba(0,0,0,0.2);
          letter-spacing: -1px;
        }

        .hero-section .lead {
          font-size: 24px;
          font-weight: 300;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Case Studies Section */
        .case-studies-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .section-header h2 {
          font-size: 48px;
          color: #5CBDAA;
          margin-bottom: 20px;
          font-weight: 800;
          position: relative;
          display: inline-block;
        }

        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #54A1D9, #5CBDAA);
          border-radius: 2px;
        }

        .section-header p {
          font-size: 20px;
          color: #6c757d;
          max-width: 750px;
          margin: 30px auto 0;
          line-height: 1.7;
        }

        /* Case Study Card */
        .case-study-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 40px;
          border: 1px solid rgba(92, 189, 170, 0.1);
          animation: fadeInUp 0.6s ease-out both;
        }

        .case-study-card:nth-child(1) { animation-delay: 0.1s; }
        .case-study-card:nth-child(2) { animation-delay: 0.2s; }
        .case-study-card:nth-child(3) { animation-delay: 0.3s; }
        .case-study-card:nth-child(4) { animation-delay: 0.4s; }

        .case-study-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(92, 189, 170, 0.2);
        }

        .card-image-section {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
        }

        .card-image-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotateBackground 15s linear infinite;
        }

        @keyframes rotateBackground {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .doctor-avatar {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 6px solid white;
          background: linear-gradient(135deg, #E8F4F8 0%, #ffffff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
          color: #5CBDAA;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
        }

        .case-study-card:hover .doctor-avatar {
          transform: scale(1.1) rotate(5deg);
        }

        .card-content-section {
          padding: 45px;
        }

        .testimonial-text {
          font-size: 18px;
          color: #495057;
          margin-bottom: 30px;
          line-height: 1.8;
          font-style: italic;
          position: relative;
          padding-left: 30px;
        }

        .testimonial-text::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -10px;
          font-size: 60px;
          color: #5CBDAA;
          opacity: 0.2;
          font-family: Georgia, serif;
        }

        .doctor-info-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 25px;
          border-top: 2px solid #f8f9fa;
        }

        .doctor-details {
          flex: 1;
        }

        .doctor-name {
          font-weight: 700;
          color: #5CBDAA;
          font-size: 20px;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .specialty {
          font-style: italic;
          color: #6c757d;
          font-size: 15px;
        }

        .action-button {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white;
          padding: 14px 32px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(92, 189, 170, 0.3);
          display: inline-block;
        }

        .action-button:hover {
          background: linear-gradient(135deg, #54A1D9 0%, #5CBDAA 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(92, 189, 170, 0.4);
          color: white;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white;
          text-align: center;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
          background-size: 100px 100px;
          opacity: 0.5;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-section h2 {
          font-size: 42px;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .cta-phone {
          display: inline-block;
          background: white;
          color: #5CBDAA;
          padding: 20px 50px;
          border-radius: 50px;
          font-size: 28px;
          font-weight: 800;
          text-decoration: none;
          margin-top: 20px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .cta-phone:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 50px rgba(0,0,0,0.3);
          color: #54A1D9;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 0;
          }

          .hero-section h1 {
            font-size: 36px;
          }

          .hero-section .lead {
            font-size: 18px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .section-header p {
            font-size: 16px;
          }

          .case-studies-section {
            padding: 60px 0;
          }

          .card-content-section {
            padding: 30px;
          }

          .testimonial-text {
            font-size: 16px;
          }

          .doctor-info-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .cta-section h2 {
            font-size: 28px;
          }

          .cta-phone {
            font-size: 20px;
            padding: 15px 35px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 style={{color:"white"}}>Success Stories That Inspire</h1>
            <p className="lead">Discover how healthcare practices across the nation are transforming operations and achieving excellence with HBS remote staffing solutions</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>We care what our customers think of us and so should you. We are partners in your business and your success is ours.</p>
          </div>

          <div className="row">
            {caseStudies.map((study) => (
              <div key={study.id} className="col-12">
                <div className="case-study-card">
                  <div className="row g-0">
                    <div className="col-lg-3 col-md-4">
                      <div className="card-image-section">
                        <div className="doctor-avatar">
                          {study.initial}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <div className="card-content-section">
                        <p className="testimonial-text">{study.testimonial}</p>
                        <div className="doctor-info-section">
                          <div className="doctor-details">
                            <div className="doctor-name">{study.name}</div>
                            <div className="specialty">{study.specialty}</div>
                          </div>
                          <Link to={`/case-study/${study.slug}`} className="action-button">{study.buttonText}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 style={{color:"white"}}>Talk to Practice Consultant</h2>
            <a href="tel:+18666438367" className="cta-phone">+1 866 643 8367</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;