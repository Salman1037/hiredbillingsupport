import "@fortawesome/fontawesome-free/css/all.min.css";
import bannerImage from "../../assets/images/hero/Psychiatry-1.jpg"; // You can update this to a psychiatry banner if needed

const HeroSection = () => {
  return (
    <section
      className="hero-section text-dark d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        height: "100vh",
        overflow: "hidden",
        marginTop: "60px",
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
          {/* Subtitle / Heading */}
          <h3
            className="fw-bold slideinup"
            style={{
              color: "#112D55",
              lineHeight: "1.3",
              animationDelay: "0.2s",
            }}
          >
            Recognized Success in Elevating{" "}
            <span className="text-theme">
              <br /> Psychiatry Medical Billing Services
            </span>
          </h3>

          {/* Description */}
          <p
            className="hero-text slideinup"
            style={{
              color: "#444",
              maxWidth: "700px",
              fontSize: "1.05rem",
              margin: "1rem 0 1.5rem",
              animationDelay: "0.6s",
            }}
          >
            Our mental health billing services are designed to prevent revenue
            leakages by ensuring accurate and timely claim submissions. With a
            proven track record, we help providers maintain financial stability
            and maximize their revenue potential.
          </p>

          {/* Button */}
          <a
            href="/schedule-a-demo/"
            className="btn btn-lg px-5 shadow slideinup"
            style={{
              background: "linear-gradient(90deg, #00AEEF, #0072BC)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              padding: "12px 36px",
              transition: "all 0.3s ease-in-out",
              animationDelay: "0.6s",
              display: "inline-block",
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
            <i className="fas fa-desktop me-2"></i> Schedule Demo
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slideinup {
            from { opacity: 0; transform: translate3d(0, 40px, 0); }
            to { opacity: 1; transform: none; }
          }

          .slideinup {
            animation: slideinup 1s ease-in-out forwards;
          }

          @media (max-width: 992px) {
            .hero-section {
              height: auto !important;
              padding: 80px 0;
              text-align: center;
            }
            .hero-content h3 {
              font-size: 1.8rem;
            }
            .hero-content p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
