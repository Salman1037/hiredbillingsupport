
import Contact from '../../components/Contact';
import Ourcertification from '../../components/Ourcertification';
import IconsService from '../../components/Hire/iconsservice';
import Readygoal from './Readygoal';
import Medicalcore from '../../components/Hire/Medicalcore';
import SuccessNumber from '../../components/Hire/successnumber';
import Medicalspecialties from '../../components/Hire/Medicalspecialties';
import MedicalVA from '../../components/Hire/medicalva';
import Faq from '../../components/Hire/Faq';
import HBSAgencies from '../../components/Hire/HBSAgencies';
import Emr from '../../components/Hire/Emr';
import MedicalHero from '../../components/Hire/Dental/MedicalHero';

function Medical() {
  return (
    <>
      <MedicalHero />
    
      <IconsService />
      <Readygoal />
    
      <Medicalspecialties />
        <SuccessNumber />
   <MedicalVA />
         <Medicalcore />
     
      <Ourcertification />
      <Faq/>
      <HBSAgencies/>
      <Emr/>
      <Contact />
    </>
  );
}

export default Medical;
