// const ServicesSection = () => {
//   const services = [
//     {
//       title: "Medical Billing",
//       desc: "Efficient billing processes for faster payments.",
//       icon: "💰",
//     },
//     {
//       title: "Denial Management",
//       desc: "Comprehensive tracking and re-submission.",
//       icon: "📊",
//     },
//     {
//       title: "AR Recovery",
//       desc: "Recover outstanding AR and improve cash flow.",
//       icon: "📈",
//     },
//     {
//       title: "Medical Coding",
//       desc: "Accurate coding for compliance and clean claims.",
//       icon: "🩺",
//     },
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: "#f6f9ff" }}>
//       <div className="container text-center">
//         <h2 className="fw-bold mb-3" style={{ color: "#0b155b" }}>
//           Comprehensive RCM Services
//         </h2>
//         <div className="row g-4 mt-4">
//           {services.map((s, i) => (
//             <div className="col-md-6 col-lg-3" key={i}>
//               <div
//                 className="card border-0 shadow-sm p-4 h-100"
//                 style={{
//                   borderRadius: "20px",
//                 }}
//               >
//                 <div
//                   className="mx-auto mb-3 d-flex align-items-center justify-content-center"
//                   style={{
//                     width: "70px",
//                     height: "70px",
//                     borderRadius: "50%",
//                     background:
//                       "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
//                     color: "#fff",
//                     fontSize: "1.8rem",
//                   }}
//                 >
//                   {s.icon}
//                 </div>
//                 <h5 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
//                   {s.title}
//                 </h5>
//                 <p className="text-secondary">{s.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ServicesSection;
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
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ color: "#0b155b" }}>
          Comprehensive <br /> Revenue Cycle Management Services
        </h2>

        <div className="row g-4 mt-4">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="card border-0 shadow-sm p-4 h-100"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#fff",
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
                <h5 className="fw-bold mb-3" style={{ color: "#0b155b" }}>
                  {s.title}
                </h5>
                <p
                 
                  style={{
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
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
