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



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/rcm" element={<RcmSection />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/neurology-billing" element={<Neurologybillingservices />} />
          <Route path="/cardiology-billing" element={<CardiologyBillingServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;