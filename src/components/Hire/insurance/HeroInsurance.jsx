
// import { Link } from "react-router-dom";
// import bannerImage from "../../../assets/images/services/inshurance-hero.jpg"; // ✅ Import your local hero image

// const HeroSection = () => {
//   return (
//     <section
//       className="hero-section text-dark d-flex align-items-center position-relative"
//       style={{
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center right",
//         minHeight: "70vh",
//         paddingTop: "60px",
//         paddingBottom: "60px",
//       }}
//     >
//       {/* Overlay for better text visibility */}
//       <div
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{
//           background: "rgba(255, 255, 255, 0.75)",
//           zIndex: 1,
//         }}
//       ></div>

//       <div className="container position-relative z-3">
//         <div className="row">
//           <div className="col-lg-7">
//             <div className="pe-lg-4">
//               <div className="mb-3">
//                 <small
//                   style={{
//                     fontSize: "15px",
//                     fontWeight: "500",
//                     color: "#00BFA6",
//                   }}
//                 >
//                   Rates from $10/Hr
//                 </small>
//               </div>

//               <h1
//                 className="fw-bold mb-4"
//                 style={{
//                   fontSize: "42px",
//                   lineHeight: "1.2",
//                   background:
//                     "linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Remote Insurance VAs that Maximize Your Claims Processing
//               </h1>

//               <p className="lead mb-4 text-dark">
//                 Dependable, HIPAA-aligned insurance VAs who excel in claims management and billing—reducing overhead and keeping your operations running smoothly, so you can stay focused on customer satisfaction.
//               </p>

//               <Link
//                 to="/contact"
//                 className="btn btn-success btn-lg"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)",
//                   border: "none",
//                   borderRadius: "25px",
//                   padding: "12px 30px",
//                   fontWeight: "600",
//                   color: "white",
//                   textDecoration: "none",
//                 }}
//               >
//                 Book a Consult →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/hero/banner/inshurance-banner.jpg"; // Replace with insurance banner if needed
const InsuranceHero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "75vh",
        paddingTop: "80px",
        paddingBottom: "80px",
        color: "#fff",
      }}
    >
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-10 col-12">
            <div className="pe-lg-4">

              <div className="mb-3">
                <small
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  Starting From $10/Hr
                </small>
              </div>

              {/* Heading */}
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "42px",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                Hire Remote Insurance Staff with HBS
              </h1>

              {/* Short Paragraph */}
              <p
                className="lead mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "650px",
                }}
              >
                Get trained insurance agents, claims processors, and policy
                coordinators to support your workflow. Reduce costs, improve
                speed, and keep operations running smoothly.
              </p>

              <Link
                to="/contact"
                className="btn btn-lg"
                style={{
                  background: "#fff",
                  borderRadius: "30px",
                  padding: "12px 35px",
                  fontWeight: "600",
                  color: "#00A651",
                  border: "none",
                }}
              >
                Book a Consult →
              </Link>

            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .hero-section {
              min-height: 65vh;
              padding-top: 60px;
              padding-bottom: 60px;
              text-align: center;
            }
            .hero-section h1 {
              font-size: 32px !important;
            }
            .hero-section p {
              font-size: 16px !important;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              padding-top: 40px;
              padding-bottom: 40px;
            }
            .hero-section h1 {
              font-size: 26px !important;
            }
            .hero-section p {
              font-size: 15px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default InsuranceHero;