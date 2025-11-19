
import CountUpStats from "../components/CountUpStats";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import HireService from "../components/Hireservicehbs";
import Medicaldesc from "../components/Medicaldesc";
import Ourcertification from "../components/Ourcertification";
import PricingDemoForm from "../components/PricingDemoForm";
import SavingsCalculator from "../components/SavingsCalculator";
import Servicessec from "../components/Servicessec";
import WhyHireWithWorkdeskVA from "../components/WhyHire";

function Home() {
  return (
    <>
      <Hero />
      <WhyHireWithWorkdeskVA />
      <CountUpStats/>
      <HireService/>
      <Medicaldesc/>
      <Servicessec/>
      <SavingsCalculator/>
      <Ourcertification/>
      <PricingDemoForm/>
      <Faq/>
      
    </>
  );
}
export default Home;
  
