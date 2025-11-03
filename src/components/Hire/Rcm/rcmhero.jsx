import doctorImg from "../../../assets/images/services/rem_doc.jpg"; // ✅ adjust path as needed

const HeroSection = () => {
  return (
    <section
      className="py-5 mt-5 mt-lg-7"
      style={{
        backgroundColor: "#ffffff",
        marginTop: "100px", // ✅ more top space from header
      }}
    >
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-lg-6 mb-5 mb-lg-0 px-4 px-lg-5">
            <h1
              className="fw-bold mb-3"
              style={{
                color: "#000000", // ✅ black text
                fontSize: "2.8rem",
                lineHeight: "1.2",
              }}
            >
              End-to-End RCM <br />
              <span style={{ fontWeight: "600" }}>Services for</span> <br />
              <span style={{ color: "#00b14f" }}>Hospitals &amp; Groups</span>
            </h1>

            <p
              className=" mb-4"
              style={{
                maxWidth: "500px",
                fontSize: "1rem",
                lineHeight: "1.6",
               
              }}
            >
              We maximize clean claims, reduce denials, and accelerate
              reimbursements — working inside your EHR/PM with audit-ready
              workflows.
            </p>

            <form className="row gy-3 gx-3 align-items-end">
              <div className="col-md-4">
                <label className="form-label small fw-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill border-success shadow-sm"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill border-success shadow-sm"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control rounded-pill border-success shadow-sm"
                  placeholder="Enter number"
                />
              </div>
              <div className="col-12 text-center text-lg-start">
                <button
                  className="btn text-white rounded-pill fw-semibold px-5 py-3 mt-3 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
                    border: "none",
                    fontSize: "1rem",
                  }}
                  type="button"
                >
                  Schedule Free Demo
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <div
              className="position-relative d-inline-block"
              style={{
                width: "420px",
                height: "420px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",

                }}
              ></div>
              <img
                src={doctorImg} // ✅ local image import used
                alt="Doctor"
                className="img-fluid position-absolute top-50 start-50 translate-middle"
                style={{
                //   borderRadius: "50%",
                //   objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
