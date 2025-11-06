import "@fortawesome/fontawesome-free/css/all.min.css";
import bannerImage from "../../assets/images/hero/Cardiology-banner.jpg"; // ✅ Replace with correct image

const HeroSection = () => {
  return (
    <section
      className="hero-section text-dark d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        height: "100vh",
        paddingTop: "140px", // ✅ Add top space to avoid header overlap
        paddingBottom: "80px", // ✅ Balanced bottom padding
      }}
      id="hero"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* Content */}
      <div
        className="container position-relative"
        style={{ zIndex: 2,  }}
      >
        <div className="hero-content py-5">
          {/* Heading */}
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.5rem",
              color: "#0D1B3E",
              lineHeight: "1.3",
            }}
          >
            Drive Profitable Growth with
          </h2>

          {/* Subheading */}
          <h1
            className="fw-bold mb-4"
            style={{
              color: "#00A651",
              fontSize: "2rem",
              lineHeight: "1.3",
            }}
          >
            Cardiology Medical Billing
          </h1>

          {/* Description */}
          <ul
            className="list-unstyled mb-4"
            style={{
            //   fontSize: "1.1rem",
            //   lineHeight: "1.8",
              color: "#444",
              maxWidth: "700px",
            }}
          >
            <li>
              • Our specialized cardiology billing services empower cardiologists
              to boost revenue while providing financial peace of mind.
            </li>
            <li>
              • Partner with us to ensure your practice thrives financially,
              allowing you to focus on delivering exceptional patient care.
            </li>
          </ul>

          {/* Button */}
          <a
            href="/schedule-demo/"
            className="btn btn-lg px-5 shadow"
            style={{
              background: "linear-gradient(90deg, #00AEEF, #0072BC)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              padding: "12px 36px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #0072BC, #005B9F)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #00AEEF, #0072BC)")
            }
          >
            <i className="fas fa-desktop me-2"></i> SCHEDULE DEMO
          </a>
        </div>
      </div>

      {/* Animation + Responsive */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translate3d(0, 40px, 0); }
            to { opacity: 1; transform: none; }
          }

          .hero-content {
            animation: fadeInUp 1s ease-in-out;
          }

          @media (max-width: 992px) {
            .hero-section {
              height: auto !important;
              padding: 80px 0;
              text-align: center;
            }
            .hero-content h2 {
              font-size: 2rem;
            }
            .hero-content h1 {
              font-size: 1.6rem;
            }
            .hero-content ul {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
