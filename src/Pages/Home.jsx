import Contact from "../components/Contact";
import CountUpStats from "../components/CountUpStats";
import Hero from "../components/Hero";
import HireService from "../components/Hireservicehbs";
import Medicaldesc from "../components/Medicaldesc";
import Ourcertification from "../components/Ourcertification";
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
      <Contact/>
    </>
  );
}
export default Home;
  
