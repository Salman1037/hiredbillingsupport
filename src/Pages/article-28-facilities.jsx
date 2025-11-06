import "@fortawesome/fontawesome-free/css/all.min.css";
import ArticleFacilities from "../components/Article28facilities";
import StatsSection from "../components/Hire/Rcm/StatsSection";
import Emr from '../components/Hire/Emr';
 // ✅ Updated banner image

const ArticleFacilitiesPage = () => {
  return (
    <>
       <ArticleFacilities />
       <section
  className="py-5 mt-5"
  style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="container py-5">
    <div className="row align-items-start g-4">
      {/* LEFT SIDE - TEXT CONTENT */}
      <div
        className="col-lg-6 p-5 rounded-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          border: "2px solid #00b14f",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3
          className="fw-bold mb-4"
          style={{ color: "#0b155b", fontSize: "1.8rem" }}
        >
          Article 28 Facilities No-Fault Collection Provider
        </h3>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          Article 28 is a public health law for regulating and recognizing
          accreditation of public health care facilities so that the facilities
          are legally licensed and run. Article 28 provides that certain
          facilities are licensed to perform particular types of procedures
          which for other reasons might not lawfully be performed. Article 28
          does not only relate to hospitals, however; it also covers surgical
          centres and nursing homes.
        </p>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          High standards of health care services for the state of New York is
          embodied in Article 28. It helps to establish that public healthcare
          facilities are operative and actual. Thus, accreditation with regards
          to the Article 28 process implies that a facility works in accordance
          with the tightest of standards. Coding and billing under Article 28
          can be more complicated than even for a medical facility that has not
          yet met the designation.
        </p>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          The team from The Hired Billing Services has years of experience of
          handling a case with such big claims behind a healthcare provider, so
          they have the required knowledge and experience to take on these
          claims when they are filed on behalf of the healthcare facility.
        </p>

        <h5 className="fw-bold mt-4 mb-2" style={{ color: "#0b155b" }}>
          Understanding the No-Fault Insurance Law
        </h5>
        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          However, because the services healthcare professionals who are
          accredited under Article 28 provide are more expensive, to some
          degree, this is because they have to be willing to pay the bills to
          ensure that high standards of care are met. As Article 28 facilities
          provide a higher cost of care, the carriers are very interested in
          controlling those costs, so more scrutiny is put on them.
        </p>

        <h5 className="fw-bold mt-4 mb-3" style={{ color: "#0b155b" }}>
          Common Reimbursement Denials Under New York’s No-Fault Laws
        </h5>
        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          However, in some cases the insurance companies are reluctant to pay
          out these bills. However, there can be many reasons why they will deny
          your No-Fault claim and the most common reasons here are as follows
          below.
        </p>

        <ul className="text-dark" style={{ fontSize: "0.95rem" }}>
          <li>
            <strong>Lack of Medical Necessity:</strong> The most common denial
            is that the insurer simply says the treatment provided by your
            facility was not “reasonable and necessary” and therefore, it is not
            covered under the No-Fault law. The insurers will collaborate with
            an independent physician to generate a peer review-based medical
            denial claiming the care was unnecessary.
          </li>
          <li className="mt-2">
            <strong>Independent Medical Exam Findings:</strong> An IME
            (Independent Medical Exam) is another way insurance companies
            “verify” a patient’s condition before paying your claims. The
            examining physician might rule that the patient’s recovery is
            complete or minimize injuries. Insurance companies will deny claims
            referring to that opinion.
          </li>
          <li className="mt-2">
            <strong>Missing Documentation:</strong> To get reimbursed, you must
            supply the insurance company with detailed documentation of care.
            Ignoring verification requests, even unjustified ones, can result in
            permanent claim denial. Always ensure every facility claim includes
            full supporting documentation.
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      <div className="col-lg-6 d-flex justify-content-center">
        <div
          className="p-5 w-100 rounded-4"
          style={{
            maxWidth: "520px",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e5e5",
          }}
        >
          <h4
            className="fw-bold text-center mb-4"
            style={{ color: "#0b155b", fontSize: "1.5rem" }}
          >
            Hurry Now & Get Free RCM Audit
          </h4>

          <form>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Subject"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message (optional)"
                rows="4"
                className="form-control rounded-4 px-4 py-3 border-success shadow-sm"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn w-100 text-white fw-semibold rounded-pill py-3"
              style={{
                background:
                  "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
                border: "none",
                fontSize: "1rem",
                letterSpacing: "0.4px",
                boxShadow: "0 4px 12px rgba(0, 177, 79, 0.3)",
              }}
            >
              Submit
            </button>
          </form>

          {/* TEXT BELOW FORM */}
          <div className="mt-4">
            <p
              className="text-dark"
              style={{ fontSize: "0.9rem", textAlign: "justify" }}
            >
              If your patient was injured in a car accident, your healthcare
              facility bill should be paid by the automobile insurance carrier.
              Once upon a time, New York’s No-Fault Insurance Law was created to
              ensure that car accident victims didn’t depend on who was at
              fault, for quality medical care. Just for this compensation of
              your No-Fault bills, you will have to file a No-Fault claim with
              the patient’s insurance company. If you file a claim, your facility
              is entitled to be reimbursed for all “reasonable and necessary”
              treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
              <StatsSection />
              <Emr />

    </>
  );
};

export default ArticleFacilitiesPage;
