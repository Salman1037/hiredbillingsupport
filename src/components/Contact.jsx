// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8">
//           <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
//             <h2 className="mb-4 fw-bold" style={{ color: '#002856' }}>
//               Have Any Questions?
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg border-0 bg-light py-3"
//                   placeholder="Your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '16px' }}
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="form-control form-control-lg border-0 bg-light py-3"
//                   placeholder="Your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '16px' }}
//                 />
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg border-0 bg-light py-3"
//                   placeholder="Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   style={{ fontSize: '16px' }}
//                 />
//               </div>

//               <div className="mb-4">
//                 <textarea
//                   className="form-control form-control-lg border-0 bg-light py-3"
//                   placeholder="Your message (optional)"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   style={{ fontSize: '16px', resize: 'none' }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary py-3 px-5 rounded-pill"
//                 style={{
//                   backgroundColor: '#00A6E6',
//                   border: 'none',
//                   fontSize: '16px',
//                   fontWeight: '500',
//                   minWidth: '160px',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#0088cc';
//                   e.target.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = '#00A6E6';
//                   e.target.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import doctorImg from "../assets/images/services/rcm-banner.png" // ✅ replace with your actual image path

const Contact = () => {
  return (
    <section className="py-5 bg-light"  style={{
        backgroundImage: `url(${doctorImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Doctor Image */}
          <div className="col-lg-6 d-none d-lg-block">
            {/* <img
              src={doctorImg}
              alt="Doctor"
              className="img-fluid rounded-start"
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px 0 0 20px",
              }}
            /> */}
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
  );
};

export default Contact;

