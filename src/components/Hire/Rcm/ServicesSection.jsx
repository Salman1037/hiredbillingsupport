
import React from "react";
import { FaProjectDiagram, FaFileMedicalAlt, FaCalendarCheck, FaUserShield } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "End-to-End RCM",
      desc: (
        <>
          Charge capture reconciliation <br />
          Coding & modifier checks + claim edits <br />
          Submissions (EDI/paper) with required attachments <br />
          Payment posting → A/R → denials/appeals → reporting
        </>
      ),
      icon: <FaProjectDiagram />,
    },
    {
      title: "Medical Billing",
      desc: (
        <>
          Encounter/charge review against documentation <br />
          CPT/ICD-10 validation & bundling edits <br />
          Prior-auth & coverage confirmations, freq/exclusions <br />
          Same-day submission for complete charges
        </>
      ),
      icon: <FaFileMedicalAlt />,
    },
    {
      title: "A/R Management",
      desc: (
        <>
          Work queues + portal/call/fax status checks <br />
          Holds/edits cleared; corrected claims/refixes sent <br />
          Escalations when SLAs slip; audit-ready notes <br />
          Weekly dashboards and aging reduction
        </>
      ),
      icon: <FaCalendarCheck />,
    },
    {
      title: "Credentialing",
      desc: (
        <>
          New enrollments & re-credentialing <br />
          CAQH setup/attestation & maintenance <br />
          Demographic updates (TIN/NPI, locations, panels) <br />
          Expirables tracking + payer follow-ups to approval
        </>
      ),
      icon: <FaUserShield />,
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f6f9ff" }}>
      <div className="container">
        {/* Header Section with Descriptive Text */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4" style={{ color: "#0b155b", fontSize: "2.2rem", lineHeight: "1.3" }}>
            HBS Offers Comprehensive <span style={{ color: "#00b14f" }}>Medical Billing & RCM Services</span>
          </h2>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", marginBottom: "1.5rem" }}>
              Our leading medical billing and revenue cycle management company has revolutionized healthcare billing solutions by replacing outdated, error-prone practice management procedures with smart, electronic medical billing services and clinical billing and accounts management solutions for all specialties.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", marginBottom: "1.5rem" }}>
              The results? <strong>Fast reimbursements, accurate claim transmission, better patient care and smooth cash flow</strong> while adhering to HIPAA-compliant patient claims billing principles. HBS's medical billing management services make them the perfect fit for comprehensive billing services, including:
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="card border-0 shadow-sm p-4 h-100"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
                    color: "#fff",
                    fontSize: "1.8rem",
                  }}
                >
                  {s.icon}
                </div>
                <h5 className="fw-bold mb-3 text-center" style={{ color: "#0b155b", fontSize: "1.1rem" }}>
                  {s.title}
                </h5>
                <p
                  style={{
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                    color: "#666",
                    textAlign: "center",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
