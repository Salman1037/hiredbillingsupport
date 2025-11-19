


// import React from "react";
// import { FaCheckCircle, FaChartBar, FaArrowUp } from "react-icons/fa";

// const Trustbilling = () => {
//   // Use site colors: green (#00C853) and blue (#1976D2)
//   const stats = [
//     {
//       percentage: "Almost 99%",
//       label: "Clean claim ratio",
//       icon: <FaCheckCircle />,
//       color: "#00C853", // Green
//     },
//     {
//       percentage: "About 97.35%",
//       label: "1st submission pass rate",
//       icon: <FaChartBar />,
//       color: "#1976D2", // Blue
//     },
//     {
//       percentage: "Up to 30%",
//       label: "Revenue Increase",
//       icon: <FaArrowUp />,
//       color: "#00C853", // Green
//     },
//   ];
//   return (
//   <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       <div className="container">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2
//             className="fw-bold mb-3"
//             style={{
//               color: "#000",
//               fontSize: "2.5rem",
//               lineHeight: "1.3",
//             }}
//           >
//             Trust Your Billing To The Company That Ranks In{" "}
//             <span style={{ color: "#362D7E", fontSize: "2.5rem" }}>
//               "Top 10 Medical Billing Companies"
//             </span>
//           </h2>
//         </div>

//         {/* Stats Cards */}
//         <div className="row g-4 mb-5">
//           {stats.map((stat, index) => (
//             <div className="col-md-6 col-lg-4" key={index}>
//               <div
//                 className="p-5 rounded-4 text-white h-100"
//                 style={{
//                   background:
//                     index % 2 === 0
//                       ? "linear-gradient(135deg, #00C853 0%, #1976D2 100%)"
//                       : "linear-gradient(135deg, #1976D2 0%, #00C853 100%)",
//                   boxShadow: "0 12px 32px rgba(25, 118, 210, 0.18)",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   cursor: "pointer",
//                   minHeight: "220px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
//                   e.currentTarget.style.boxShadow =
//                     "0 16px 40px rgba(25, 118, 210, 0.28)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0) scale(1)";
//                   e.currentTarget.style.boxShadow =
//                     "0 12px 32px rgba(25, 118, 210, 0.18)";
//                 }}
//               >
//                 <div className="d-flex justify-content-between align-items-start mb-4">
//                   <h3
//                     className="fw-bold mb-0"
//                     style={{
//                       fontSize: "3.2rem",
//                       color: "#fff",
//                       textShadow: "0 2px 8px rgba(0,0,0,0.10)",
//                     }}
//                   >
//                     {stat.percentage}
//                   </h3>
//                   <div
//                     style={{
//                       fontSize: "2.8rem",
//                       color: "#fff",
//                       opacity: 0.95,
//                     }}
//                   >
//                     {stat.icon}
//                   </div>
//                 </div>
//                 <p className="mb-0" style={{ fontSize: "1.25rem", fontWeight: "600", letterSpacing: "0.5px", color: "#fff" }}>
//                   {stat.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>

//       <style>{`
//         @media (max-width: 768px) {
//           h2 {
//             font-size: 1.8rem !important;
//           }
//           .col-lg-4 h3 {
//             font-size: 2.2rem !important;
//           }
//           .p-5 {
//             padding: 1.5rem !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// <div className="elementor-element elementor-element-2525e87 e-flex e-con-boxed e-con e-parent" data-id="2525e87" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//   <div className="e-con-inner">
//     <div className="elementor-element elementor-element-abd0a76 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="abd0a76" data-element_type="widget" data-widget_type="heading.default">
//       <div className="elementor-widget-container">
//         <h2 className="elementor-heading-title elementor-size-default">Trust Your Billing To The Company That Ranks In  <span style={{color: '#362D7E'}}>“Top 10 Medical Billing Companies”</span></h2>				</div>
//     </div>
//     <div className="elementor-element elementor-element-013ef47 e-flex e-con-boxed e-con e-child" data-id="013ef47" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//       <div className="e-con-inner">
//         <div className="elementor-element elementor-element-bc88982 e-flex e-con-boxed e-con e-child" data-id="bc88982" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//           <div className="e-con-inner">
//             <div className="elementor-element elementor-element-59a9b1c elementor-widget elementor-widget-heading" data-id="59a9b1c" data-element_type="widget" data-widget_type="heading.default">
//               <div className="elementor-widget-container">
//                 <span className="elementor-heading-title elementor-size-default">Almost 99%</span>				</div>
//             </div>
//             <div className="elementor-element elementor-element-9c09e8f e-flex e-con-boxed e-con e-child" data-id="9c09e8f" data-element_type="container">
//               <div className="e-con-inner">
//                 <div className="elementor-element elementor-element-7831057 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id={7831057} data-element_type="widget" data-widget_type="heading.default">
//                   <div className="elementor-widget-container">
//                     <span className="elementor-heading-title elementor-size-default">Clean <br />claim ratio</span>				</div>
//                 </div>
//                 <div className="elementor-element elementor-element-831a90c elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="831a90c" data-element_type="widget" data-widget_type="image.default">
//                   <div className="elementor-widget-container">
//                     <img loading="lazy" decoding="async" width={189} height={189} src="https://bellmedex.com/wp-content/uploads/2024/02/hp-icon-99.webp" className="attachment-large size-large wp-image-26402" alt srcSet="https://bellmedex.com/wp-content/uploads/2024/02/hp-icon-99.webp 189w, https://bellmedex.com/wp-content/uploads/2024/02/hp-icon-99-150x150.webp 150w" sizes="(max-width: 189px) 100vw, 189px" />															</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="elementor-element elementor-element-04ee8bf e-flex e-con-boxed e-con e-child" data-id="04ee8bf" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//           <div className="e-con-inner">
//             <div className="elementor-element elementor-element-5b16d7b elementor-widget elementor-widget-heading" data-id="5b16d7b" data-element_type="widget" data-widget_type="heading.default">
//               <div className="elementor-widget-container">
//                 <span className="elementor-heading-title elementor-size-default">About 97.35%</span>				</div>
//             </div>
//             <div className="elementor-element elementor-element-222baef e-flex e-con-boxed e-con e-child" data-id="222baef" data-element_type="container">
//               <div className="e-con-inner">
//                 <div className="elementor-element elementor-element-e7f2d73 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="e7f2d73" data-element_type="widget" data-widget_type="heading.default">
//                   <div className="elementor-widget-container">
//                     <span className="elementor-heading-title elementor-size-default">1st submission<br /> pass rate</span>				</div>
//                 </div>
//                 <div className="elementor-element elementor-element-89f08a9 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="89f08a9" data-element_type="widget" data-widget_type="image.default">
//                   <div className="elementor-widget-container">
//                     <img loading="lazy" decoding="async" width={170} height={173} src="https://bellmedex.com/wp-content/uploads/2024/02/Group-431-1.webp" className="attachment-large size-large wp-image-25932" alt />															</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="elementor-element elementor-element-e50e991 e-flex e-con-boxed e-con e-child" data-id="e50e991" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//           <div className="e-con-inner">
//             <div className="elementor-element elementor-element-1721a6f elementor-widget elementor-widget-heading" data-id="1721a6f" data-element_type="widget" data-widget_type="heading.default">
//               <div className="elementor-widget-container">
//                 <span className="elementor-heading-title elementor-size-default">Up to 30%</span>				</div>
//             </div>
//             <div className="elementor-element elementor-element-ca907e7 e-flex e-con-boxed e-con e-child" data-id="ca907e7" data-element_type="container">
//               <div className="e-con-inner">
//                 <div className="elementor-element elementor-element-45b9193 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="45b9193" data-element_type="widget" data-widget_type="heading.default">
//                   <div className="elementor-widget-container">
//                     <span className="elementor-heading-title elementor-size-default">Revenue<br /> Increase</span>				</div>
//                 </div>
//                 <div className="elementor-element elementor-element-034fa51 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="034fa51" data-element_type="widget" data-widget_type="image.default">
//                   <div className="elementor-widget-container">
//                     <img loading="lazy" decoding="async" width={224} height={205} src="https://bellmedex.com/wp-content/uploads/2024/02/hp-icon-30.webp" className="attachment-large size-large wp-image-26403" alt />															</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="elementor-element elementor-element-96a155a e-flex e-con-boxed e-con e-child" data-id="96a155a" data-element_type="container">
//       <div className="e-con-inner">
//         <div className="elementor-element elementor-element-3f89855 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="3f89855" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">
//           <div className="elementor-widget-container">
//             <img loading="lazy" decoding="async" width={230} height={79} src="https://bellmedex.com/wp-content/uploads/2023/11/google.svg" className="attachment-large size-large wp-image-16011" alt />															</div>
//         </div>
//         <div className="elementor-element elementor-element-d5681af elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="d5681af" data-element_type="widget" data-widget_type="image.default">
//           <div className="elementor-widget-container">
//             <img loading="lazy" decoding="async" width={233} height={79} src="https://bellmedex.com/wp-content/uploads/2023/11/trustpilot.svg" className="attachment-large size-large wp-image-16009" alt />															</div>
//         </div>
//         <div className="elementor-element elementor-element-d913726 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="d913726" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">
//           <div className="elementor-widget-container">
//             <img loading="lazy" decoding="async" width={237} height={79} src="https://bellmedex.com/wp-content/uploads/2023/11/Serchen.svg" className="attachment-large size-large wp-image-16010" alt />															</div>
//         </div>
//         <div className="elementor-element elementor-element-fe1f63e elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="fe1f63e" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">
//           <div className="elementor-widget-container">
//             <img loading="lazy" decoding="async" width={237} height={79} src="https://bellmedex.com/wp-content/uploads/2023/11/onc.svg" className="attachment-large size-large wp-image-16008" alt />															</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// };

// export default Trustbilling;
import React from "react";
import { FaCheckCircle, FaChartBar, FaArrowUp } from "react-icons/fa";

// Import rating platform logos
// import googleLogo from "../assets/images/google.svg";
// import trustpilotLogo from "../assets/images/trustpilot.svg";
// import serchenLogo from "../assets/images/serchen.svg";
// import oncLogo from "../assets/images/onc.svg";

const Trustbilling = () => {
  const stats = [
    {
      percentage: "Almost 99%",
      label: "Clean claim ratio",
      icon: <FaCheckCircle />,
    },
    {
      percentage: "About 97.35%",
      label: "1st submission pass rate",
      icon: <FaChartBar />,
    },
    {
      percentage: "Up to 30%",
      label: "Revenue Increase",
      icon: <FaArrowUp />,
    },
  ];

  return (
    <>
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{
              color: "#000",
              fontSize: "2.5rem",
              lineHeight: "1.3",
            }}
          >
            Trust Your Billing To The Company That Ranks In{" "}
            <span style={{ color: "#362D7E", fontSize: "2.5rem" }}>
              "Top 10 Medical Billing Companies"
            </span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="p-5 rounded-4 text-white h-100"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, #00C853 0%, #1976D2 100%)"
                      : "linear-gradient(135deg, #1976D2 0%, #00C853 100%)",
                  boxShadow: "0 12px 32px rgba(25, 118, 210, 0.18)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(25, 118, 210, 0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(25, 118, 210, 0.18)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <h3
                    className="fw-bold mb-0"
                    style={{
                      fontSize: "3.2rem",
                      color: "#fff",
                      textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    }}
                  >
                    {stat.percentage}
                  </h3>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      color: "#fff",
                      opacity: 0.95,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    color: "#fff",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ New Logo Section */}
        {/* <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          <img
            src={googleLogo}
            alt="Google"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={trustpilotLogo}
            alt="Trustpilot"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={serchenLogo}
            alt="Serchen"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={oncLogo}
            alt="ONC"
            style={{ width: "200px", height: "auto" }}
          />
        </div> */}
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8rem !important;
          }
          .col-lg-4 h3 {
            font-size: 2.2rem !important;
          }
          .p-5 {
            padding: 1.5rem !important;
          }
          img {
            width: 150px !important;
          }
        }
      `}</style>
    </section>


    <section className="py-5 bg-light">
      <div className="container">
        <div className="trustbilling-flex" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
          {/* Left Column */}
          <div className="trustbilling-left" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '700px' }}>
            <h2 className="fw-bold mb-3">
              The Only{' '}
              <span style={{ color: '#5b4bdb' }}>Medical Billing Company</span>{' '}
              Uniting Tech & Expertise to Meet Provider’s Vision
            </h2>
            <p className="text-muted mb-4">
              Our USA-based healthcare revenue cycle management company helps
              individual and institutional providers navigate the tight spots of
              patient billing and coding via modern medical billing services.
            </p>
            <div className="trustbilling-features" style={{ display: 'flex', gap: '2rem' }}>
              <ul className="list-unstyled" style={{ margin: 0 }}>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Patient Verification</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Claim Scrubbing</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Claim Submission</li>
              </ul>
              <ul className="list-unstyled" style={{ margin: 0 }}>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Revenue Cycle Management</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />A/R Recovery</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Fast Reimbursement</li>
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="trustbilling-right" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flex: '1 1 320px', minWidth: '320px', justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Card 1 */}
            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px', width: '100%', maxWidth: '320px', minWidth: '260px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '5px solid #1abc9c', justifyContent: 'center', height: '100%' }}>
              <div className="badge text-white px-3 py-2 mb-3" style={{ backgroundColor: '#1abc9c', fontWeight: 500, fontSize: '1rem' }}>
                Happiness Score
              </div>
              <h1 className="fw-bold display-4" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#1abc9c' }}>96%</h1>
              <p className="text-muted text-center" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                Based on a 4.8-star rating from 350+ providers across the states.
              </p>
              {/* <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '1rem', color: '#1abc9c' }}>
                See testimonials &rarr;
              </a> */}
            </div>
            {/* Card 2 */}
            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px', width: '100%', maxWidth: '320px', minWidth: '260px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '5px solid #3498db', justifyContent: 'center', height: '100%' }}>
              <div className="badge text-white px-3 py-2 mb-3" style={{ backgroundColor: '#3498db', fontWeight: 500, fontSize: '1rem' }}>
                Billing Experts
              </div>
              <h1 className="fw-bold display-4" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#3498db' }}>1.2k+</h1>
              <p className="text-muted text-center" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                CMRS, RHIA, CPB certified medical billers and coders for every specialty.
              </p>
              {/* <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '1rem', color: '#3498db' }}>
                About us &rarr;
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>


      <section
        className="py-5"
        style={{
          backgroundColor: "#3498db",
          borderRadius: "15px",
          margin: "2rem auto",
          width: "90%",
        }}
      >
        <div className="container text-white">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-3 mb-md-0 text-center text-md-start">
              Experience HBS medical billing for as low as{' '}
              <span style={{ color: "#1abc9c" }}>2.49%</span>
            </h3>
            <button
              className="btn fw-semibold px-4 py-2"
              style={{
                border: "2px solid #1abc9c",
                borderRadius: "25px",
                color: "#1abc9c",
                background: "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseOver={e => {
                e.target.style.background = "#1abc9c";
                e.target.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.target.style.background = "transparent";
                e.target.style.color = "#1abc9c";
              }}
            >
              Book a Demo
            </button>
          </div>

          <p className="mb-4 text-center text-md-start" style={{ color: '#eaf6fb' }}>
            Over 1500 healthcare practices trust HBS for reliable, secure, and efficient medical billing. Let’s connect and elevate your revenue cycle.
          </p>

          <hr
            style={{
              borderTop: "2px solid #1abc9c",
              opacity: 1,
              width: "100%",
              marginBottom: "2rem",
            }}
          />

          <div className="row text-center text-md-start">
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              Instant insurance coverage verification for every patient.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              HIPAA-compliant billing for maximum data security.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              24/7 claim submission and support for your practice.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              98% claim reimbursement rate for healthy cash flow.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustbilling;
