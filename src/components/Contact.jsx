import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
            <h2 className="mb-4 fw-bold" style={{ color: '#002856' }}>
              Have Any Questions?
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 bg-light py-3"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '16px' }}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg border-0 bg-light py-3"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 bg-light py-3"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg border-0 bg-light py-3"
                  placeholder="Your message (optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  style={{ fontSize: '16px', resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary py-3 px-5 rounded-pill"
                style={{
                  backgroundColor: '#00A6E6',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  minWidth: '160px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0088cc';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00A6E6';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
