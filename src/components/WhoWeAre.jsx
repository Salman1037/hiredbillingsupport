// import React from "react";
// import AboutMain from "../assets/images/avatar/AboutMain.png"; // main doctor image
// // import AboutSmall from "../assets/AboutSmall.png"; // small top-left image

// const WhoWeAre = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side: Images */}
//         <div className="relative flex justify-center md:justify-start">
//           {/* Small Image Top Left */}
//           {/* <img
//             src={AboutSmall}
//             alt="Team Discussion"
//             className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
//           /> */}

//           {/* Main Image */}
//           <img
//             src={AboutMain}
//             alt="Medical Professional"
//             className="rounded-2xl w-[420px] h-[420px] object-cover shadow-md"
//           />

//           {/* HBS Card Overlay */}
//           <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-5 shadow-xl w-56 text-center">
//             <h3 className="text-xl font-bold text-gray-900">HBS</h3>
//             <p className="text-gray-500 text-sm mb-2">Hired Billing Support</p>
//             <div className="flex justify-center mb-2 text-green-500">
//               {[...Array(5)].map((_, i) => (
//                 <i key={i} className="fa-solid fa-star"></i>
//               ))}
//             </div>
//             <a
//               href="tel:+13213211740"
//               className="text-[#1cb65d] font-medium hover:underline"
//             >
//               <i className="fa-solid fa-phone mr-1"></i> +1-321-321-1740
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Text */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0e1b50] mb-4">
//             Who We Are
//           </h2>
//           <div className="w-20 h-[3px] bg-[#00b4d8] mb-6"></div>
//           <p className="text-gray-600 leading-relaxed">
//             Hence the human touch is important to gain intimate understanding of
//             your unique challenges and needs as an IT professional that
//             healthcare IT solutions should help navigate through innovations.
//             With a legacy starting in 2020 of being a leading Complete Revenue
//             Cycle Management (RCM) Solution provider in the USA. Over 1000
//             skilled billers and coders of RCM are trained on the latest
//             technology and have the objective to empower hospitals, group
//             practices, and solo practitioners by means of customized RCM
//             strategy. This hand-tailored approach helps your best medical billing
//             business make timely collections, which leads to a powerful practice
//             culture as your healthcare provider transforms into revenue cycle
//             #1.
//           </p>
//           <br />
//           <p className="text-gray-600 leading-relaxed">
//             But on the other side, every medical practice is dissimilar from one
//             another, thus keeping a customizable solution at the exact pricing is
//             the key for better productivity & workflow optimization. And this is
//             why, for many independent medical organizations, HBS is a perfect and
//             natural fit.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import AboutMain from "../assets/images/avatar/AboutMain.png"; // main image
// import AboutSmall from "../assets/AboutSmall.png"; // small top-left image

const WhoWeAre = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Images */}
          <Col md={6} className="position-relative mb-5 mb-md-0">
           
            {/* Main Image */}
            <img
              src={AboutMain}
              alt="Medical Staff"
              className="rounded-4  w-100"
              style={{
                maxWidth: "420px",
                height: "420px",
                objectFit: "cover",
              }}
            />

            {/* Info Card */}
            <Card
              className="position-absolute shadow border-0 text-center"
              style={{
                bottom: "20px",
                right: "20px",
                width: "230px",
                borderRadius: "20px",
              }}
            >
              <Card.Body>
                <h5 className="fw-bold mb-1 text-dark">HBS</h5>
                <p className="text-muted small mb-2">Hired Billing Support</p>
                <div className="text-success mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                </div>
                <a
                  href="tel:+13213211740"
                  className="text-decoration-none text-success fw-semibold"
                >
                  <i className="fa-solid fa-phone me-2"></i> +1-321-321-1740
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Text */}
          <Col md={6}>
            <h2 className="fw-bold text-dark mb-3" style={{ color: "#0e1b50" }}>
              Who We Are
            </h2>
            <div
              className="mb-4"
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#00b4d8",
              }}
            ></div>
            <p className="text-muted lh-lg">
              Hence the human touch is important to gain intimate understanding
              of your unique challenges and needs as an IT professional that
              healthcare IT solutions should help navigate through innovations.
              With a legacy starting in 2020 of being a leading Complete Revenue
              Cycle Management (RCM) Solution provider in the USA. Over 1000
              skilled billers and coders of RCM are trained on the latest
              technology and have the objective to empower Hospitals, group
              practices, and solo practitioners by means of customized RCM
              strategy. This hand-tailored approach helps your best medical
              billing business make timely collections, which leads to a
              powerful practice culture as your healthcare provider transforms
              into revenue cycle #1.
            </p>
            <p className="text-muted lh-lg">
              But on the other side, every medical practice is dissimilar from
              one another, thus keeping a customizable solution at the exact
              pricing is the key for better productivity & workflow
              optimization. And this is why, for many independent medical
              organizations, HBS is a perfect and natural fit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre;
