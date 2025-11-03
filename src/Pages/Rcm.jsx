// import React from 'react';
// // Make sure Bootstrap CSS is loaded in your app (index.js or App.js):
// // import 'bootstrap/dist/css/bootstrap.min.css';
// export default function RcmSection() {
//   const styles = {
//     section: {
//       padding: '60px 40px',
//       background: '#ffffff',
//       fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
//     },
//     row: { minHeight: '520px' },
//     left: { paddingLeft: '6rem' },
//     title: {
//       fontWeight: 700,
//       color: '#0b2b56',
//       fontSize: '48px',
//       lineHeight: 1.05,
//     },
//     highlight: {
//       display: 'block',
//       color: '#10c24a',
//       fontSize: '58px',
//     },
//     sub: {
//       color: '#8b97a6',
//       maxWidth: '460px',
//       marginTop: '18px',
//       marginBottom: '28px',
//     },
//     label: { color: '#0b2b56', fontWeight: 600, fontSize: '0.9rem' },
//     input: {
//       border: '2px solid #10c24a',
//       boxShadow: 'none',
//       padding: '14px 18px',
//       borderRadius: '50px', // Rounded input fields
//     },
//     button: {
//       padding: '12px 26px',
//       background: 'linear-gradient(90deg, #14d19b 0%, #00b26a 100%)',
//       color: '#fff',
//       border: 'none',
//       fontWeight: 600,
//       borderRadius: '50px',
//       boxShadow: '0 6px 18px rgba(16,178,106,0.18)',
//     },
//     rightWrap: {
//       position: 'relative',
//       height: '520px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     circle: {
//       width: '420px',
//       height: '420px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle at 30% 30%, #9bdcf0 0%, #81d0f0 30%, #cfeff7 100%)',
//       position: 'absolute',
//       right: '6%',
//     },
//     doctor: {
//       position: 'absolute',
//       right: '3%',
//       bottom: 0,
//       maxHeight: '520px',
//       transform: 'translateY(4%)',
//     },
//   };

//   return (
//     <section style={styles.section}>
//       <div className="container-fluid">
//         <div className="row align-items-center" style={styles.row}>
//           {/* LEFT CONTENT */}
//           <div className="col-lg-6" style={styles.left}>
//             <h1 style={styles.title}>
//               End-to-End RCM<br />
//               <span>Services for</span>
//               <br />
//               <span style={styles.highlight}>Hospitals &amp; Groups</span>
//             </h1>

//             <p style={styles.sub}>
//               We maximize clean claims, reduce denials, and accelerate reimbursements—working inside your EHR/PM with audit-ready workflows.
//             </p>

//             <form className="row gx-3 gy-3 align-items-center">
//               <div className="col-sm-4">
//                 <label style={styles.label}>Your name</label>
//                 <input type="text" className="form-control" style={styles.input} />
//               </div>

//               <div className="col-sm-4">
//                 <label style={styles.label}>Your email</label>
//                 <input type="email" className="form-control" style={styles.input} />
//               </div>

//               <div className="col-sm-4">
//                 <label style={styles.label}>Phone Number</label>
//                 <input type="tel" className="form-control" style={styles.input} />
//               </div>

//               <div className="col-12 mt-2">
//                 <button type="button" className="btn" style={styles.button}>
//                   Schedule Free Demo
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="col-lg-6 d-none d-lg-block">
//             <div style={styles.rightWrap}>
//               <div style={styles.circle}></div>
//               <img
//                 src="../assets/images/rcm/doctor.png"
//                 alt="doctor"
//                 style={styles.doctor}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// ==========================
// 1️⃣ HERO SECTION
// ==========================


// ==========================
// 2️⃣ WHY CHOOSE SECTION
// ==========================


// ==========================
// 3️⃣ SERVICES SECTION
// ==========================


// ==========================
// 4️⃣ TRUSTED BY SECTION
// ==========================


// ==========================
// 5️⃣ WORKFLOW SECTION
// ==========================
// const WorkflowSection = () => {
//   const steps = [
//     { icon: "🧾", title: "Patient Registration" },
//     { icon: "💉", title: "Medical Coding" },
//     { icon: "📤", title: "Claims Submission" },
//     { icon: "🔁", title: "Denial Management" },
//     { icon: "💳", title: "Payment Posting" },
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: "#f8fff9" }}>
//       <div className="container text-center">
//         <h2 className="fw-bold mb-4" style={{ color: "#0b155b" }}>
//           Our Workflow: Simplifying RCM
//         </h2>
//         <div className="row g-4 justify-content-center">
//           {steps.map((s, i) => (
//             <div
//               className="col-6 col-md-2 d-flex flex-column align-items-center"
//               key={i}
//             >
//               <div
//                 className="d-flex align-items-center justify-content-center mb-3"
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   borderRadius: "50%",
//                   background:
//                     "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
//                   color: "#fff",
//                   fontSize: "2rem",
//                 }}
//               >
//                 {s.icon}
//               </div>
//               <h6 className="fw-bold" style={{ color: "#0b155b" }}>
//                 {s.title}
//               </h6>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// ==========================
// MAIN EXPORT
// ==========================
import HeroSection from "../components/Hire/Rcm/rcmhero";
import WhyChooseSection from "../components/Hire/Rcm/WhyChoose";
import ServicesSection from "../components/Hire/Rcm/ServicesSection";
import RcmFeatureList from "../components/Hire/Rcm/RcmFeatureList";
import StatsSection from "../components/Hire/Rcm/StatsSection";
import MedicalClaimsBilling from "../components/Hire/Rcm/MedicalClaimsBilling";
import Ourcertification from "../components/Ourcertification";
import NationwideAvailability from "../components/Hire/Rcm/NationwideAvailability";
import HBSAgencies from "../components/Hire/HBSAgencies";
const Rcm = () => {
  return (
    <>
      <HeroSection />
      <RcmFeatureList />
      <WhyChooseSection />
      <ServicesSection />
      <StatsSection />
      <MedicalClaimsBilling />
      <Ourcertification/>
      <NationwideAvailability />
      <HBSAgencies />
      
      

    </>
  );
};

export default Rcm;

