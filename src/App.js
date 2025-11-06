import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Medical from './Pages/Hiretalent/medical';
import Dental from './Pages/Hiretalent/Dental';
import RcmSection from './Pages/Rcm';
import Insurance from './Pages/Hiretalent/insurance';
import Pricing from './Pages/pricing';
import About from './Pages/About';
import ContactForm from './Pages/Contact';
import Neurologybillingservices from './Pages/specialitiespage/neurology-billing-services';
import CardiologyBillingServices from './Pages/specialitiespage/cardiology-billing-services';
import EndocrinologyBillingServices from './Pages/specialitiespage/endocrinology-billing';
import PodiatryBillingServices from './Pages/specialitiespage/podiatry-billing';
import OrthopedicBillingServices from './Pages/specialitiespage/orthopedic-billing';
import ObgynBillingServices from './Pages/specialitiespage/obgyn-billing';
import PsychiatryBillingServices from './Pages/specialitiespage/psychiatry-billing';
import NephrologyBillingServices from './Pages/specialitiespage/nephrology-billing';
import Casestudy from './Pages/casestudy';
import ArticleFacilitiesPage from './Pages/article-28-facilities';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/rcm-management" element={<RcmSection />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/neurology-billing" element={<Neurologybillingservices />} />
          <Route path="/cardiology-billing" element={<CardiologyBillingServices />} />
          <Route path="/endocrinology-billing" element={<EndocrinologyBillingServices />} />
          <Route path="/podiatry-billing" element={<PodiatryBillingServices />} />
          <Route path="/orthopedic-billing" element={<OrthopedicBillingServices />} />
          <Route path="/obgyn-billing" element={<ObgynBillingServices />} />
          <Route path="/psychiatry-billing" element={<PsychiatryBillingServices />} />
          <Route path="/nephrology-billing" element={<NephrologyBillingServices />} />
          <Route path="/case-study" element={<Casestudy />} />
          <Route path="/article-28-facilities" element={<ArticleFacilitiesPage />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;