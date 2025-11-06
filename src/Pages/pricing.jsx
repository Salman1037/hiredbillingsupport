import PricingBanner from "../components/pricinghero";


import StatsSection from "../components/Hire/Rcm/StatsSection";
import Emr from '../components/Hire/Emr';
import RcmFeatureList from "../components/Hire/Rcm/RcmFeatureList";

function pricing() {
  return (
    <>
    <PricingBanner />
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
          A Partner Committed to Your Financial Health
        </h3>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          We care about your money at HBS, our charging model is designed to
          increase your revenue collections. What sets us apart is that we only
          charge a percentage once we've collected settlements from payers,
          putting our success in line with yours.
        </p>

        <h5 className="fw-bold mt-4 mb-2" style={{ color: "#0b155b" }}>
          Our Pricing Model Highlights:
        </h5>
        <ul className="text-dark" style={{ fontSize: "0.95rem" }}>
          <li>We do not charge any hidden fees — Transparent Pricing</li>
          <li>No Upfront Setup Costs</li>
          <li>
            Demo sessions at no cost for best practices in billing
          </li>
          <li>
            Flexible Financing with the option to leave at any time
          </li>
          <li>Free Financial Wellness Audits</li>
        </ul>

        <h5 className="fw-bold mt-4 mb-2" style={{ color: "#0b155b" }}>
          Additional Benefits:
        </h5>
        <ul className="text-dark" style={{ fontSize: "0.95rem" }}>
          <li>RPA bots yield 99% Claim accuracy through automation</li>
          <li>FREE AR REHABILITATION 24 Days</li>
          <li>
            Credentialing services at no cost for all of the providers with the payers
          </li>
          <li>26-Day Fast Insurance Payments</li>
          <li>Faster Collections Boost Revenue by 20%</li>
          <li>
            Consistent Cash Flow through periodic AR follow-ups
          </li>
          <li>
            As long as you are on HBS, so is your financial success.
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
            Get In Touch
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
                placeholder="Email Address"
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
                placeholder="Your Message"
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        
       <StatsSection />
        <Emr />
        <RcmFeatureList />
    </>
  );
}

export default pricing;
