import HeroSection from "../../components/specialities/cardiologyhero";
import billingImg from '../../assets/images/hero/Cardiology-2.jpg';
import billingImg2 from '../../assets/images/hero/Cardiology-1.jpg';
import StatsSection from "../../components/Hire/Rcm/StatsSection";
import Emr from '../../components/Hire/Emr';
import Contact from "../../components/Contact";
import TestimonialsSection from "../../components/TestimonialsSection";


function CardiologyBillingServices() {
  return (
    <>
    <HeroSection />
  <section className="medical-desc">
  <div className="medical-header">
    <div className="container">
      <h2>Optimize Practice Revenue with Cardiology Medical Billing</h2>
      <p>HBS cardiology billing services empower your specialty practice to maximize
        revenue without changing your operations. Increase profitability and ensure
        financial stability with our expert billing solutions.</p>
      <div className="decor">
        <span className="dots">...</span>
        <span className="line" />
      </div>
    </div>
  </div>

  <div className="container medical-content">
    <div className="medical-text">
    

      <p>
        Cardiology practices are highly complex, requiring an experienced billing
        team to obtain proper reimbursement. Your practice can lose tons of revenue
        without professional coders and billers. Our cardiology billing resources
        are used to coding for everything from stent replacements to pacemakers and
        coronary interventions. Similarly, there can be a high cost of keeping an
        in-house billing staff. Thus, outsourcing with a dedicated cardiology billing
        firm like HBS is a must.
      </p>

      <p>
        Optimum billing and revenue cycle billing with Enterprise HBS — our team
        will work on clean claim submissions on your billing software so your
        financial outcomes are maximized and your practice survives.
      </p>
    </div>

    <div className="medical-image-wrap">
      <img src={billingImg} alt="Cardiology Billing" className="medical-image" />
      <div className="image-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</section>
  <StatsSection />

   <section className="medical-desc py-5 bg-white">
      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Image Left */}
         <div className="col-lg-6 d-flex justify-content-center">
  <div className="position-relative" style={{ maxWidth: "420px" }}>
    <img
      src={billingImg2}
      alt="Cardiology Billing"
      className="img-fluid rounded shadow"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    />
    <div
      className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-between align-items-center"
      style={{ opacity: 0.1 }}
      aria-hidden="true"
    >
      <span
        className="bg-warning rounded-circle"
        style={{ width: "10px", height: "10px" }}
      ></span>
      <span
        className="bg-warning rounded-circle"
        style={{ width: "10px", height: "10px" }}
      ></span>
      <span
        className="bg-warning rounded-circle"
        style={{ width: "10px", height: "10px" }}
      ></span>
      <span
        className="bg-warning rounded-circle"
        style={{ width: "10px", height: "10px" }}
      ></span>
    </div>
  </div>
</div>


          {/* Text Right */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">
              Seamless Cardiology Billing Solutions with HBS
            </h4>

            <p className="mb-3">
              We have vast experience in cardiology coding, so your claims are
              submitted cleanly and accurately, minimizing the chances of
              denials. That allows your cardiologists to focus on what they do
              best — taking care of patients — while we handle the revenue
              cycle. By enabling timely reimbursements through our efficient
              billing and coding processes, we help improve the performance and
              quality of your practice.
            </p>

            <p>
              Using HBS for your cardiology medical billing services, you can
              enhance your business workflow and increase productivity in your
              practice. Our trained professionals minimize claim denials,
              ensuring a steady increase in your revenue. HBS provides
              comprehensive revenue cycle management services that help
              cardiology specialists thrive in today’s dynamic healthcare
              environment. We streamline your workflows, optimize your
              cardiology EHR systems, and deliver insights to keep your practice
              performing at its best.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Emr />
    <TestimonialsSection />
    <Contact />
    </>
  );
}

export default CardiologyBillingServices;
