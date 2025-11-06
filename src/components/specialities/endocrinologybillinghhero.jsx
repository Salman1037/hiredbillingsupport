import "@fortawesome/fontawesome-free/css/all.min.css";
import bannerImage from "../../assets/images/hero/Endocrinology-banner.jpg"; // ✅ Updated banner image

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
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="hero-content py-5">
          {/* Heading */}
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.5rem",
              color: "#112D55",
              lineHeight: "1.3",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Maximize Practice Revenue with
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
            Orthopedic Medical Billing
          </h1>

          {/* Description */}
          <p
            style={{
              color: "#444",
              fontSize: "1.1rem",
              maxWidth: "700px",
              marginBottom: "1rem",
            }}
          >
            HBS’s orthopedic medical billing services are designed to modernize your
            billing operations, ensuring that your practice generates optimal revenue.
            Our tailored approach not only streamlines your billing processes but also
            directly impacts your bottom line, leading to improved financial outcomes.
          </p>

          <ul
            className="list-unstyled mb-4"
            style={{
              color: "#444",
              maxWidth: "700px",
            }}
          >
            <li>
              • Simplify complex billing workflows and reduce claim denials.
            </li>
            <li>
              • Strengthen financial performance with expert revenue cycle management.
            </li>
            <li>
              • Focus more on patient care while we optimize your collections.
            </li>
          </ul>

          {/* Button */}
          <a
            href="/pricing/"
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

      {/* Responsive & Animation Styles */}
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
            .hero-content p,
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
