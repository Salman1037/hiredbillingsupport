import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/hero/Medical-banner.jpg"; // ✅ Import your local hero image

const MedicalHero = () => {
  return (
    <section
      className="hero-section text-dark d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        height: "100vh",
        paddingTop: "140px", // ✅ Prevent text from hiding behind header
        paddingBottom: "80px",
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative z-3">
        <div className="row">
          <div className="col-lg-7">
            <div className="pe-lg-4">
              {/* Top Small Text */}
              <div className="mb-3">
                <small
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#00BFA6",
                  }}
                >
                  Started From $7/Hr
                </small>
              </div>

              {/* Main Heading */}
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "42px",
                  lineHeight: "1.2",
                  background:
                    "linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hire Remote Medical Staff with HBS
              </h1>

              {/* Description Text */}
              <p className="lead mb-4 text-dark">
                Boost your practice with HIPAA-aligned virtual medical talent
                from HBS. Cut hiring costs by up to 70%, save staff hours, and
                scale operations fast.
              </p>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn btn-success btn-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 30px",
                  fontWeight: "600",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Book a Consult →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHero;
