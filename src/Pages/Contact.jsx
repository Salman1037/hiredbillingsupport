import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "120px", 
        paddingBottom: "80px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="p-5 shadow-sm rounded-4 bg-light">
              <h2
                className="fw-bold text-center mb-4"
                style={{ color: "#0e1b50" }}
              >
                Get In Touch!
              </h2>

              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    className="rounded-pill py-3 border-0 shadow-sm"
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    className="rounded-pill py-3 border-0 shadow-sm"
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>

                {/* Subject */}
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="rounded-pill py-3 border-0 shadow-sm"
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your message (optional)"
                    className="rounded-4 p-3 border-0 shadow-sm"
                    style={{ backgroundColor: "#fff", resize: "none" }}
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="rounded-pill px-5 py-3 fw-semibold border-0"
                    style={{
                      backgroundColor: "#00b4d8", // HBS blue
                      color: "#fff",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
