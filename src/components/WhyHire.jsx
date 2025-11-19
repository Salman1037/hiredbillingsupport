import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './WhyHire.css';


const WhyHire = () => {
    useEffect(() => {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }, []);

    return (
        <section className="why-hire-section pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center mb-5">
                   <h2 style={{ fontWeight: 'bold' }}>
  <span
    style={{
    //   background: 'linear-gradient(90deg, #1abc9c, #3498db)',
      background: ' #3498db',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Why Hired&nbsp;
  </span>

  <span
    style={{
    //   background: 'linear-gradient(90deg, #1abc9c, #3498db)',
      background: ' #1abc9c',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Billing Support
  </span>
</h2>

                    <p className="mb-0">
                        Pre-vetted, HIPAA-aligned medical & dental remote talent who work in your EHR and keep 
                        schedules full and claims moving — from $10/hr.
                    </p>
                </div>

                <div className="row">
                    {/* HIPAA-Secure & Compliant */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.1s">
                            <div className="icon-wrapper mb-4">
                              <i className="fas fa-shield-alt"></i>

                            </div>
                            <h3>HIPAA-Secure & Compliant</h3>
                            <p>
                                BAAs signed, least-privilege access, encrypted workflows, and audit-ready notes.
                            </p>
                        </div>
                    </div>

                    {/* Risk-Free Hiring */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Risk-Free Hiring</h3>
                            <p>
                                Launch in 3–5 days; pay only when the match fits your role, hours, and KPIs.
                            </p>
                        </div>
                    </div>

                    {/* Works in Your Systems */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-laptop-medical"></i>
                            </div>
                            <h3>Works in Your Systems</h3>
                            <p>
                                Epic, athena, eClinicalWorks, Kareo, AdvancedMD, Dentrix, Open Dental, Eaglesoft.
                            </p>
                        </div>
                    </div>

                    {/* Insurance Done Right */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-file-medical-alt"></i>
                            </div>
                            <h3>Insurance Done Right</h3>
                            <p>
                                Eligibility, pre-auths, claim status, denials & appeals handled to payer rules.
                            </p>
                        </div>
                    </div>

                    {/* Front Desk & Patient Ops */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.5s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-user-md"></i>
                            </div>
                            <h3>Front Desk & Patient Ops</h3>
                            <p>
                                Phones, recalls, confirmations, treatment plan follow-ups, no-show recovery.
                            </p>
                        </div>
                    </div>

                    {/* KPI Visibility */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.6s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>KPI Visibility</h3>
                            <p>
                                Daily production logs and weekly dashboards for FPR, denials, A/R, and CSAT.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Add workdeskva-link CSS for special styling
// You can move this to your main CSS file if preferred
// Styles moved to style.css for better maintainability and site branding

export default WhyHire;
