import PricingBanner from "../components/pricinghero";


import StatsSection from "../components/Hire/Rcm/StatsSection";
import Emr from '../components/Hire/Emr';
import RcmFeatureList from "../components/Hire/Rcm/RcmFeatureList";

function pricing() {
  return (
    <>
    <PricingBanner />
    <section className="py-5 bg-light"  style={{
            // backgroundImage: `url(${doctorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Doctor Image */}
           
             <div className="col-lg-6">
        <h2
          style={{
            fontWeight: 600,
            color: "#0b1b4a",
            position: "relative",
            display: "inline-block",
            fontSize: "1.6rem",
            marginBottom: "1rem",
            paddingBottom: 10,
          }}
        >
          <span
            style={{
              color: "#007bff",
              fontWeight: "bold",
              marginRight: 8,
              fontSize: 22,
            }}
          >
            •••
          </span>
          A Partner Committed to Your Financial Health
          <span
            style={{
              position: "absolute",
              left: 35,
              bottom: 0,
              width: 70,
              height: 3,
              backgroundColor: "#007bff",
              display: "block",
            }}
          />
        </h2>
        <p
          style={{
            color: "#4a4a4a",
            lineHeight: "1.8",
            fontSize: 14,
            marginBottom: "1.2rem",
          }}
        >
          We care about your money at HBS, our charging model is designed to
          increase your revenue collections. What sets us apart is that we only
          charge a percentage once we've collected settlements from payers,
          putting our success in line with yours.
        </p>

        <h6 className="fw-bold mt-3" style={{ fontSize: 15 }}>
          Our Pricing Model Highlights:
        </h6>
        <ul style={{ fontSize: 14, color: "#4a4a4a", paddingLeft: "1.2rem" }}>
          <li>No hidden fees — Transparent Pricing</li>
          <li>No Upfront Setup Costs</li>
          <li>Free demo sessions for best billing practices</li>
          <li>Flexible Financing — leave anytime</li>
          <li>Free Financial Wellness Audits</li>
        </ul>

        <h6 className="fw-bold mt-4" style={{ fontSize: 15 }}>
          Additional Benefits:
        </h6>
        <ul style={{ fontSize: 14, color: "#4a4a4a", paddingLeft: "1.2rem" }}>
          <li>RPA bots yield 99% claim accuracy</li>
          <li>FREE AR REHABILITATION (24 Days)</li>
          <li>Credentialing services at no cost</li>
          <li>26–Day Fast Insurance Payments</li>
          <li>Faster Collections — Boost Revenue by 20%</li>
          <li>Consistent Cash Flow via periodic AR follow-ups</li>
        </ul>

        <p style={{ fontSize: 14, color: "#4a4a4a", marginTop: "1rem" }}>
          As long as you are with HBS, your financial success is our success.
        </p>
      </div>
             
    
              {/* Right Side - Form */}
              <div className="col-lg-6">
                <div
                  className="bg-white shadow-lg p-5 rounded-4"
                  style={{
                    maxWidth: "550px",
                    margin: "0 auto",
                    borderRadius: "20px",
                  }}
                >
                  <h3 className="text-center fw-bold mb-4 text-dark">
                    Schedule A Demo
                  </h3>
    
                  <form>
                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label text-muted">Your name</label>
                      <input
                        type="text"
                        className="form-control rounded-pill bg-light border-0 py-2 px-3"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
    
                    {/* Email */}
                    <div className="mb-3 position-relative">
                      <label className="form-label text-muted">Your email</label>
                      <input
                        type="email"
                        className="form-control rounded-pill bg-light border-0 py-2 px-3 pe-5"
                        placeholder="Enter your email"
                        required
                      />
                      <i
                        className="fas fa-envelope text-primary position-absolute"
                        style={{
                          right: "20px",
                          top: "60%",
                          transform: "translateY(-50%)",
                        }}
                      ></i>
                    </div>
    
                    {/* Subject */}
                    <div className="mb-3">
                      <label className="form-label text-muted">Subject</label>
                      <input
                        type="text"
                        className="form-control rounded-pill bg-light border-0 py-2 px-3"
                        placeholder="Enter subject"
                        required
                      />
                    </div>
    
                    {/* Message */}
                    <div className="mb-4">
                      <label className="form-label text-muted">
                        Your message (optional)
                      </label>
                      <textarea
                        className="form-control bg-light border-0 rounded-4 p-3"
                        rows="4"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
    
                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary w-50 rounded-pill py-3"
                      style={{ backgroundColor: "#0d6efd", border: "none" }}
                    >
                      Submit
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
