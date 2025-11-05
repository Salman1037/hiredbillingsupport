import HeroSection from "../../components/specialities/obgynbillinghero";
import billingImg from '../../assets/images/hero/macbook-Mac.png';
import billingImg2 from '../../assets/images/hero/Orthopedic-2.jpg';
import billingImg3 from '../../assets/images/hero/orthopedic-1.jpg';

import StatsSection from "../../components/Hire/Rcm/StatsSection";
import Emr from '../../components/Hire/Emr';
import Contact from "../../components/Contact";
import TestimonialsSection from "../../components/TestimonialsSection";


function OrthopedicBillingServices() {
  return (
    <>
    <HeroSection />
<section className="medical-desc">
  {/* Main Content Section */}
  <div className="container medical-content">
    <div className="medical-text">
      <h4>Overcome the Challenges of Orthopedic Medical Billing</h4>

      <p>
        The requirement of high-quality documentation along with qualified billing experts 
        will aid in billing the correct services and recording the correct information related 
        to orthopedic coding and billing. Identification of missing patient-eligibility verification 
        or other documentation gaps could result in your claims being denied, which can put a severe 
        strain on both your revenue and patient outcomes. A high denial rate can hinder your revenue 
        stream and add stress to your practice.
      </p>

      <p>
        Modernizing your billing operations is the key to overcoming these challenges and improving 
        your practice’s financial health. Data-driven, tech-led companies like HBS ensure that the 
        entire billing system runs smoothly. With this streamlining, you can track how it enhances 
        your revenue generation efforts.
      </p>

      <p>
        When you upgrade your orthopedic billing to the ideal process with HBS, you’re doing much 
        more than streamlining your practice; you’re setting it up for consistent monthly revenues 
        and long-term financial success for your orthopedic practice.
      </p>

      {/* Button */}
      <a
        href="/pricing/"
        className="btn btn-lg px-5 shadow"
        style={{
          background: "linear-gradient(90deg, #00AEEF, #0072BC)",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          fontWeight: "600",
          letterSpacing: "0.5px",
          padding: "12px 36px",
          transition: "all 0.3s ease-in-out",
          display: "inline-block",
          marginTop: "1rem",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #0072BC, #005B9F)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #00AEEF, #0072BC)")
        }
      >
        <i className="fas fa-desktop me-2"></i> Request Pricing
      </a>
    </div>

    {/* Image Section */}
    <div className="medical-image-wrap">
      <img
        src={billingImg}
        alt="Orthopedic Medical Billing"
        className="medical-image"
      />
      <div className="image-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</section>

<section className="medical-desc">
  {/* Header Section */}
  <div className="medical-header">
    <div className="container">
      <h2>Avoid Payment Delays with Orthopedic Billing Solutions</h2>
      <p>
        Eliminate reimbursement delays and accelerate your revenue cycle with
        HBS’s orthopedic medical billing services. Streamline your billing
        processes to ensure timely payments and maximize your practice’s
        financial performance.
      </p>
      <div className="decor">
        <span className="dots">...</span>
        <span className="line" />
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="container medical-content d-flex align-items-center flex-wrap">
    {/* Image Left */}
    <div className="medical-image-wrap order-lg-1 order-1">
      <img
        src={billingImg3}
        alt="Orthopedic Billing"
        className="medical-image"
      />
      <div className="image-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>

    {/* Text Right */}
    <div className="medical-text order-lg-2 order-2">
      <h4>Enhance Your Revenue Cycle with Orthopedic Billing Solutions</h4>
      <p>
        Take advantage of HBS’s orthopedic billing solutions to maximize your
        practice’s financial performance in the above ways. Billing is integrated
        in a way that reduces overhead expenses, optimizes reimbursement
        processes, and promotes continuous revenue inflow and stability.
      </p>

      <p>
        With HBS’s orthopedic billing services, hospitals don’t need to hire a
        costly in-house team, thus becoming an economical option for them. Our
        services save overhead costs, and timely claim submission leads to fast
        reimbursements, resulting in 30% more revenue.
      </p>

      <p>
        The orthopedic billing specialists on our team devise customized plans to
        ensure that you achieve high claim acceptance rates and strong cash flow.
        We actively pursue open cases with payers, perform extensive account
        reconciliation, and execute necessary audit checks to protect your
        practice’s revenue cycle integrity.
      </p>

      <p>
        When you work with HBS, you can optimize billing processes, minimize
        wasteful spending, and maintain a healthy revenue cycle that propels your
        practice toward continued growth and success.
      </p>
    </div>
  </div>
</section>


  <StatsSection />
<section className="medical-desc">
  {/* Header Section */}
  <div className="medical-header">
    <div className="container">
      <h2>Optimize Your Orthopedic Billing Process with HBS</h2>
      <p>
        Streamline your billing operations and maximize revenue with HBS’s expert 
        orthopedic billing services, ensuring a more efficient and profitable practice.
      </p>
      <div className="decor">
        <span className="dots">...</span>
        <span className="line" />
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="container medical-content">
    {/* Text Section */}
    <div className="medical-text">
      <h4>Why Choose HBS for Orthopedic Billing</h4>

      <p>
        With HBS by your side, orthopedic medical billing is handled with a focus 
        on accuracy, efficiency, and financial success. Our innovative solutions 
        simplify your billing workflow, reduce coding denials, and leverage 
        technology to enhance your revenue cycle. Partnering with HBS allows you 
        to leave the complex billing tasks to experts while you focus on patient care.
      </p>

      <p>
        Coding denials are a major concern in orthopedics; however, HBS ensures 
        that your practice remains compliant through regular audits and by using 
        the latest coding software handled by our certified coders. Every claim 
        is reviewed for accuracy to minimize rejections and ensure timely reimbursements.
      </p>

      <p>
        Outsourcing your orthopedic medical billing to HBS increases efficiency, 
        reduces administrative burden, and strengthens your financial performance. 
        With HBS managing your billing process, you can maintain consistent cash 
        flow and long-term profitability for your orthopedic practice.
      </p>
    </div>

    {/* Image Section */}
    <div className="medical-image-wrap">
      <img src={billingImg2} alt="Orthopedic Billing" className="medical-image" />
      <div className="image-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
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

export default OrthopedicBillingServices;
