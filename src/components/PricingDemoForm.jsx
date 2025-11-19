import React, { useState } from "react";

const PricingDemoForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Pakistan (پاکستان)",
    phone: "",
    company: "",
    industry: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    setSuccess("");
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!validateEmail(form.email)) errs.email = "Enter a valid email";
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.industry.trim()) errs.industry = "Please select industry";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSuccess("");
      return;
    }

    setLoading(true);
    // Simulate submit (replace with real submit in production)
    setTimeout(() => {
      console.log("Submitting demo request:", form);
      setSuccess("✓ Thank you! We'll contact you shortly to schedule the demo.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        country: "Pakistan (پاکستان)",
        phone: "",
        company: "",
        industry: "",
      });
      setErrors({});
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      className="py-5 d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, var(--bs-light) 0%, #f8f9fa 100%)",
        minHeight: "auto",
        width: "100%",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", padding: "0 1rem" }}>
        <h2
          className="fw-bold text-center mb-2"
          style={{
            color: "var(--bs-dark)",
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            letterSpacing: "-0.5px",
            lineHeight: "1.3",
          }}
        >
          Zero-Risk Hiring -<br />
          <span style={{ color: "var(--bs-primary)", fontWeight: "700" }}>
            Interview For Free
          </span>
        </h2>

        <p
          className="text-center mb-5"
          style={{
            color: "#666",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "1rem auto 3rem",
            lineHeight: "1.6",
          }}
        >
          Schedule a personalized demo and see how we can help you build better teams.
        </p>

        <div
          className=" p-4 p-md-5 rounded-4 bg-white mx-auto"
          style={{
            maxWidth: "720px",
            width: "100%",
            // boxShadow: "0 10px 40px rgba(2, 21, 78, 0.08)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            animation: "slideUp 0.6s ease-out",
          }}
        >
          <p className="fw-semibold text-center mb-4" style={{ color: "var(--bs-dark)", fontSize: "1.1rem" }}>
            Book a free demo with our experts
          </p>

          <form onSubmit={handleSubmit} noValidate aria-describedby="form-status">
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="visually-hidden">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  type="text"
                  className={`form-control rounded-pill bg-light ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="First Name*"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  style={{
                    borderColor: errors.firstName ? "#dc3545" : "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                />
                {errors.firstName && (
                  <div className="text-danger small mt-2" style={{ animation: "fadeIn 0.3s ease" }}>
                    ⚠ {errors.firstName}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  type="text"
                  className={`form-control rounded-pill bg-light ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Last Name*"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  style={{
                    borderColor: errors.lastName ? "#dc3545" : "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                />
                {errors.lastName && (
                  <div className="text-danger small mt-2" style={{ animation: "fadeIn 0.3s ease" }}>
                    ⚠ {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="visually-hidden">Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className={`form-control rounded-pill bg-light ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email*"
                aria-invalid={errors.email ? "true" : "false"}
                style={{
                  borderColor: errors.email ? "#dc3545" : "rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
              />
              {errors.email && (
                <div className="text-danger small mt-2" style={{ animation: "fadeIn 0.3s ease" }}>
                  ⚠ {errors.email}
                </div>
              )}
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="country" className="visually-hidden">Country</label>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="form-select rounded-pill bg-light"
                  aria-label="Country"
                  style={{
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <option>Pakistan (پاکستان)</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="visually-hidden">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  className="form-control rounded-pill bg-light"
                  placeholder="Phone (Optional)"
                  style={{
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="company" className="visually-hidden">Company Name</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  className={`form-control rounded-pill bg-light ${errors.company ? 'is-invalid' : ''}`}
                  placeholder="Company Name*"
                  aria-invalid={errors.company ? "true" : "false"}
                  style={{
                    borderColor: errors.company ? "#dc3545" : "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                />
                {errors.company && (
                  <div className="text-danger small mt-2" style={{ animation: "fadeIn 0.3s ease" }}>
                    ⚠ {errors.company}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="industry" className="visually-hidden">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className={`form-select rounded-pill bg-light ${errors.industry ? 'is-invalid' : ''}`}
                  aria-invalid={errors.industry ? "true" : "false"}
                  style={{
                    borderColor: errors.industry ? "#dc3545" : "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <option value="">Select Industry*</option>
                  <option>Healthcare</option>
                  <option>IT / Software</option>
                  <option>Finance / Banking</option>
                  <option>Retail</option>
                  <option>Manufacturing</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
                {errors.industry && (
                  <div className="text-danger small mt-2" style={{ animation: "fadeIn 0.3s ease" }}>
                    ⚠ {errors.industry}
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center gap-2 mt-5">
              <button
                type="submit"
                disabled={loading}
                className="btn fw-bold px-5 py-2 rounded-pill"
                style={{
                  background: loading ? "#6c757d" : "var(--bs-primary)",
                  color: "var(--bs-white)",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(17, 64, 60, 0.2)",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.8 : 1,
                  minWidth: "180px",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(17, 64, 60, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(17, 64, 60, 0.2)";
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        animation: "spin 1s linear infinite",
                        marginRight: "8px",
                      }}
                    >
                      ⟳
                    </span>
                    Submitting...
                  </>
                ) : (
                  "Book a Demo"
                )}
              </button>
            </div>

            <div id="form-status" aria-live="polite" aria-atomic="true" className="text-center mt-4">
              {success && (
                <div
                  className="alert alert-success mb-0"
                  style={{
                    animation: "slideDown 0.3s ease",
                    borderRadius: "12px",
                    border: "1px solid #d4edda",
                    padding: "1rem",
                    fontSize: "1rem",
                  }}
                  role="alert"
                >
                  {success}
                </div>
              )}
            </div>
          </form>

          <style>
            {`
              @keyframes slideUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              
              .form-control:focus, 
              .form-select:focus {
                box-shadow: 0 0 0 0.2rem rgba(17, 64, 60, 0.15);
                border-color: var(--bs-primary);
                outline: none;
                background-color: #fff;
              }
              
              .form-control, 
              .form-select {
                height: 50px;
                padding: 0 20px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                font-size: 1rem;
                transition: all 0.3s ease;
              }
              
              .form-control::placeholder {
                color: #999;
                font-size: 0.95rem;
              }
              
              .form-select option {
                padding: 10px;
              }
              
              .form-control.is-invalid,
              .form-select.is-invalid {
                border-color: #dc3545;
              }
              
              @media (max-width: 576px) {
                .rounded-4 { 
                  border-radius: 16px !important; 
                }
                .form-control, 
                .form-select { 
                  height: 48px;
                  font-size: 16px;
                }
                h2 {
                  font-size: 1.5rem !important;
                }
                .btn {
                  min-width: 150px !important;
                  padding: 0.75rem 1.5rem !important;
                }
              }
              
              @media (min-width: 577px) and (max-width: 768px) {
                .form-control, 
                .form-select { 
                  height: 49px;
                }
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default PricingDemoForm;
