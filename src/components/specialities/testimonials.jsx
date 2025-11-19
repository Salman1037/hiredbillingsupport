import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const testimonials = [
  {
    heading: "Our Clients Are Making Healthcare Better",
    text: `Since using CureMD’s Virtual Front Desk, we've
            reduced costs, improved efficiency, and our
            patients are noticeably happier.`,
    name: "Brad Womble",
    company: "Test Smarter Inc.",
  },
  {
    heading: "We’ve Seen Amazing Improvements",
    text: `CureMD’s cardiology billing solutions have streamlined
            our workflow and significantly reduced claim denials.`,
    name: "Dr. Amanda Lee",
    company: "HeartCare Clinics",
  },
  {
    heading: "A Game Changer for Our Practice",
    text: `Their AI-driven billing has boosted our revenue and 
            saved countless hours of admin work.`,
    name: "Michael Traynor",
    company: "CardioPlus Health",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: "70px 0", marginTop: "60px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div
              style={{
                background: "#f5f7fb",
                padding: "60px 30px",
                borderRadius: "40px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* LEFT ARROW */}
              <Button
                onClick={prev}
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#5DBFA7",
                  border: "none",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                }}
              >
                ‹
              </Button>

              {/* CONTENT */}
              <h4 className="fw-bold mb-4">{testimonials[index].heading}</h4>

              <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "600px", margin: "0 auto" }}>
                {testimonials[index].text}
              </p>

              <div className="mt-4">
                <strong>{testimonials[index].name}</strong>
                <br />
                <span style={{ color: "#555" }}>{testimonials[index].company}</span>
              </div>

              {/* RIGHT ARROW */}
              <Button
                onClick={next}
                style={{
                  position: "absolute",
                  right: "30px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#5DBFA7",
                  border: "none",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                }}
              >
                ›
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
