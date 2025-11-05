import HeroSection from "../../components/specialities/podiatrybillinghero";
import billingImg from '../../assets/images/hero/macbook-Mac.png';
import billingImg2 from '../../assets/images/hero/banner1.jpg';
import billingImg3 from '../../assets/images/hero/Podiatry-1.jpg';

import StatsSection from "../../components/Hire/Rcm/StatsSection";
import Emr from '../../components/Hire/Emr';
import Contact from "../../components/Contact";
import TestimonialsSection from "../../components/TestimonialsSection";


function podiatryBillingServices() {
  return (
    <>
    <HeroSection />
<section className="medical-desc">
  {/* Header Section */}
  <div className="medical-header">
    <div className="container">
      <h2>Maximize Practice Revenue with Podiatry Billing Services</h2>
      <p>
        HBS podiatry billing services empower your specialty practice to increase
        revenue without changing your operations. Optimize your financial outcomes
        and drive profitability with our expert billing solutions.
      </p>
      <div className="decor">
        <span className="dots">...</span>
        <span className="line" />
      </div>
    </div>
  </div>

  {/* Main Content Section */}
  <div className="container medical-content">
    <div className="medical-text">
      <h4>Streamline Workload and Enhance Podiatry Billing Efficiency</h4>
      <p>
        We follow podiatry coding best practices, simplifying billing and coding
        processes for your practice. Good billing not only leads to more income but
        also facilitates better decision-making in your practice. Outsource your
        podiatry billing and coding to HBS to increase revenue and avoid losing money.
      </p>

      <p>
        These efficiencies alleviate administrative challenges for your staff,
        freeing you to devote additional time to patient care. Our expert podiatry
        billing and coding services help your practice run more smoothly, efficiently,
        and profitably.
      </p>
    </div>

    {/* Image Section */}
    <div className="medical-image-wrap">
      <img src={billingImg} alt="Podiatry Billing" className="medical-image" />
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
  <div className="container medical-content d-flex align-items-center flex-wrap">
    {/* Image Left */}
    <div className="medical-image-wrap order-lg-1 order-1">
      <img
        src={billingImg3}
        alt="Podiatry Billing Provider"
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
      <h5>Enhance Your Practice with a Premier Podiatry Billing Provider</h5>
      <p>
        Podiatrists need a trusted billing partner to maximize reimbursements and
        accelerate payments from payers. HBS is a leading podiatry billing company
        dedicated to streamlining your revenue cycle, so you can focus more on
        delivering exceptional patient care. We provide HIPAA-compliant billing
        services to ensure complete data security and peace of mind.
      </p>

      <p>
        As healthcare evolves, staying up to date with podiatry billing and coding
        standards is crucial. Our certified specialists use advanced tools and proven
        expertise to simplify your billing workflow, reduce claim denials, and improve
        your financial outcomes. Partner with HBS to enhance your practice’s
        productivity, profitability, and long-term financial stability.
      </p>
    </div>
  </div>
</section>


  <StatsSection />
<section className="medical-desc">
  {/* Header Section */}
  <div className="medical-header">
    <div className="container">
      <h2>Enhance Revenue with Affordable Podiatry Billing Services</h2>
      <p>
        Our affordable podiatry billing services are designed to help you maximize
        revenue and enhance the profitability of your practice. Partner with us to
        ensure your financial success while keeping costs manageable.
      </p>
      <div className="decor">
        <span className="dots">...</span>
        <span className="line" />
      </div>
    </div>
  </div>

  {/* Main Content Section */}
  <div className="container medical-content">
    <div className="medical-text">
      <h4>Why Choose HBS for Podiatry Billing</h4>
      <p>
        We are a team of professional experts dedicated to providing the best podiatry
        billing services at HBS. Our main focus is filing clean claims with accurate
        coding — drastically improving your claims acceptance ratio and optimizing
        your reimbursements. Our specialists know how to fully utilize advanced
        podiatry billing software to ensure you receive the highest payouts possible.
      </p>
      <p>
        Choosing HBS means choosing a partner committed to making revenue cycle
        management (RCM) effortless. With our proven solutions, you can improve
        practice efficiency, increase collections, and reduce administrative burdens —
        giving you more time to focus on patient care. Our comprehensive A/R
        management also safeguards the financial health and long-term profitability of
        your podiatry practice.
      </p>
    </div>

    {/* Image Section */}
    <div className="medical-image-wrap">
      <img src={billingImg2} alt="Affordable Podiatry Billing Services" className="medical-image" />
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

export default podiatryBillingServices;
