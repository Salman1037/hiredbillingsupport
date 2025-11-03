// import React from "react";
// import { FaDesktop } from "react-icons/fa";
// import heroBg from "../../../assets/images/services/Tailored-Medical-Billing-Services-02.jpg"; // ✅ Imported background image

// const HeroBanner = () => {
//   return (
//     <section
//       id="hero"
//       className="th-hero-wrapper hero-1 position-relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container py-5">
//         <div className="hero-style1 text-center text-white">
//           {/* Subtitle / Heading */}
//           <h3 className="fw-bold mb-3" data-ani="slideinup" data-ani-delay="0.2s">
//             Insurance Virtual Assistants{" "}
//             <span className="text-theme d-block">That Keep Claims Moving</span>
//           </h3>

//           {/* Paragraph */}
//           <p
//             className="hero-text fs-5 mb-4"
//             data-ani="slideinup"
//             data-ani-delay="0.6s"
//           >
//             Dedicated Insurance VAs for eligibility, pre-authorizations, claim
//             status, denials and appeals—working inside your EHR/billing tools.
//             <br />
//             <span className="fw-bold text-theme">Starts at $7/Hr.</span>
//           </p>

//           {/* Button */}
//           <a
//             href="/schedule-a-demo/"
//             className="btn btn-primary px-4 py-2 fw-semibold d-inline-flex align-items-center"
//             data-ani="slideinup"
//             data-ani-delay="0.6s"
//             style={{
//               backgroundColor: "#007bff",
//               borderRadius: "8px",
//               border: "none",
//             }}
//           >
//             <FaDesktop className="me-2" />
//             Schedule Demo
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
import React from "react";
import { FaDesktop } from "react-icons/fa";
import heroImage from "../../../assets/images/services/Tailored-Medical-Billing-Services-02.jpg"; // ✅ image import

const HeroSection = () => {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: "100vh", // ✅ full screen height
        background: "linear-gradient(90deg, #f9fcff 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="text-content" style={{ paddingRight: "20px" }}>
              <h1
                className="fw-bold mb-4"
                style={{
                  color: "#001d4a",
                  fontSize: "2.8rem",
                  lineHeight: "1.3",
                }}
              >
                Insurance Virtual Assistants
                <br />
                <span style={{ color: "#00c36a" }}>That Keep Claims Moving</span>
              </h1>

              <p
                className="text-muted mb-4"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  maxWidth: "500px",
                }}
              >
                Dedicated Insurance VAs for eligibility, pre-authorizations,
                claim status, denials and appeals—working inside your
                EHR/billing tools.
                <br />
                <strong>Starts at $7/Hr.</strong>
              </p>

              <a
                href="/schedule-a-demo"
                className="btn d-inline-flex align-items-center fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #00c36a 0%, #0094ff 100%)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 30px",
                  color: "#fff",
                  fontSize: "1rem",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                }}
              >
                <FaDesktop className="me-2" />
                SCHEDULE DEMO
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 col-md-12  mt-5 mt-lg-0">
            <img
              src={heroImage}
              alt="Health Insurance Claim Form"
              className="img-fluid rounded-4 "
              style={{
                maxHeight: "890px",
                width: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
