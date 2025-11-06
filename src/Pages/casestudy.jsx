import React from 'react';

const CaseStudy = () => {
  return (
    <>
      <style>{`
        :root {
          --primary-blue: #5B9BD5;
          --light-blue: #E3F2FD;
          --success-green: #6FCD6F;
          --text-dark: #2C3E50;
        }

        body {
          font-family: 'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: #F5F5F5;
        }

        .hero-section {
          background: linear-gradient(135deg, #5B9BD5 0%, #4A8BC2 100%);
          border-radius: 24px;
          padding: 220px 60px;
          color: white;
          margin-bottom: 80px;
        }

        .hero-section h1 {
          font-size: 2.75rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .hero-section p {
          font-size: 1.125rem;
          font-weight: 400;
          opacity: 0.95;
        }

        .stats-section {
          background: white;
          padding: 60px 0;
          margin-bottom: 80px;
        }

        .stat-card {
          text-align: center;
          padding: 20px;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--success-green);
          margin-bottom: 12px;
          line-height: 1;
        }

        .stat-label {
          color: #6c757d;
          font-size: 0.95rem;
          font-weight: 400;
        }

        .content-section {
          margin-bottom: 80px;
        }

        .problem-solution-card {
          background: #E8F4FD;
          border-radius: 20px;
          padding: 48px;
          border: 2px solid #D6EBFA;
          height: 100%;
          transition: all 0.3s ease;
        }

        .problem-solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(91, 155, 213, 0.12);
        }

        .problem-solution-card h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 28px;
        }

        .problem-solution-card p {
          font-size: 1rem;
          line-height: 1.75;
          color: #4A5568;
          margin-bottom: 20px;
        }

        .problem-solution-card p:last-child {
          margin-bottom: 0;
        }

        .result-section {
          background: #E8F4FD;
          border-radius: 20px;
          padding: 48px;
          border: 2px solid #D6EBFA;
        }

        .result-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 40px;
        }

        .result-item {
          background: rgba(209, 241, 221, 0.4);
          border: 2px solid #C3E6CB;
          border-radius: 12px;
          padding: 24px 28px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .result-item:hover {
          background: rgba(209, 241, 221, 0.6);
          border-color: #95D5A4;
        }

        .result-item p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #2D3748;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 50px 30px;
          }
          
          .hero-section h1 {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .problem-solution-card,
          .result-section {
            padding: 32px;
          }

          .problem-solution-card h2,
          .result-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="container-fluid px-0">
        {/* Hero Section */}
        <div className="container py-5">
          <div className="hero-section">
            <div className="row">
              <div className="col-lg-11">
                <h1>
                  How HBS Helped Riverbend Health Save $1.05M/yr & Fix Admin Bottlenecks Across 9 Departments
                </h1>
                <p>
                  How HBS Helped Riverbend Health Save <strong>$1.05M/yr</strong> & Fix Admin Bottlenecks Across <strong>9 Departments</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="container">
            <div className="row g-4">
              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-number">42</div>
                  <div className="stat-label">hires placed in 12 months</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-number">9</div>
                  <div className="stat-label">departments supported</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-number">7Days</div>
                  <div className="stat-label">time-to-hire</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="stat-card">
                  <div className="stat-number">1.05$M</div>
                  <div className="stat-label">annual savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem & Solution Section */}
        <div className="container content-section">
          <div className="row g-4 mb-5">
            {/* The Problem */}
            <div className="col-lg-6">
              <div className="problem-solution-card">
                <h2>The Problem</h2>
                <p>
                  Riverbend's clinics were missing calls, prior auths were stalling, and A/R was aging. Local hiring took weeks and turnover stayed high. Denials rose from missing eligibility notes and inconsistent follow-ups.
                </p>
                <p>
                  Leadership needed a compliant, scalable way to add trained people—fast.
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="col-lg-6">
              <div className="problem-solution-card">
                <h2>The HBS Solution</h2>
                <p>
                  HBS deployed a managed team of pre-vetted, HIPAA-aligned VAs working inside Epic, athena, Dentrix, and Open Dental.
                </p>
                <p>
                  Roles covered: reception, eligibility, prior auth, claim status/A/R, denials/appeals, scribing, recalls/treatment follow-ups.
                </p>
                <p>
                  We set SOPs per payer, daily production logs, and weekly KPI dashboards (FPR, denial mix, A/R aging, answer time).
                </p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="row">
            <div className="col-12">
              <div className="result-section">
                <h2>The Result</h2>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="result-item">
                      <p>+37pp improvement in calls answered under 60s</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="result-item">
                      <p>96% first-pass clean-claim rate (up from 81%)</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="result-item">
                      <p>-23% A/R over 90 days in 6 months</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="result-item">
                      <p>7-day average time-to-hire, consistent coverage</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="result-item">
                      <p>$1.05M/yr cost reduction vs. in-house staffing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;