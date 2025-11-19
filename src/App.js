import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { metadata } from './utils/metadata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import NotFound from './Pages/NotFound';
// import Blog from './Pages/Blog';




function MetadataManager() {
  const location = useLocation();
  
  const getMetadataForPath = (path) => {
    switch(path) {
      case '/':
        return metadata.home;
      case '/medical':
        return metadata.medical;
      case '/dental':
        return metadata.dental;
      case '/rcm-management':
        return metadata.rcm;
      case '/insurance':
        return metadata.insurance;
      case '/pricing':
        return metadata.pricing;
      case '/about':
        return metadata.about;
      case '/contact':
        return metadata.contact;
      case '/neurology-billing-services':
        return metadata.specialties.neurology;
      case '/cardiology-billing-services':
        return metadata.specialties.cardiology;
      case '/endocrinology-billing-services':
        return metadata.specialties.endocrinology;
      case '/podiatry-billing-services':
        return metadata.specialties.podiatry;
      case '/orthopedic-billing-services':
        return metadata.specialties.orthopedic;
      case '/obgyn-billing-services':
        return metadata.specialties.obgyn;
      case '/psychiatry-billing-services':
        return metadata.specialties.psychiatry;
      case '/nephrology-billing-services':
        return metadata.specialties.nephrology;
      case '/case-study':
        return metadata.caseStudy;
      case '/article-28-facilities':
        return metadata.article28;
      default:
        return metadata.notFound;
    }
  };

  const currentMetadata = getMetadataForPath(location.pathname);

  return (
    <Helmet>
      <title>{currentMetadata.title}</title>
      <meta name="description" content={currentMetadata.description} />
      <meta name="keywords" content={currentMetadata.keywords} />
      <meta property="og:title" content={currentMetadata.title} />
      <meta property="og:description" content={currentMetadata.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentMetadata.title} />
      <meta name="twitter:description" content={currentMetadata.description} />
    </Helmet>
  );
}

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
        <ScrollToTop />
        <MetadataManager />
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
          <Route path="/neurology-billing-services" element={<Neurologybillingservices />} />
          <Route path="/cardiology-billing-services" element={<CardiologyBillingServices />} />
          <Route path="/endocrinology-billing-services" element={<EndocrinologyBillingServices />} />
          <Route path="/podiatry-billing-services" element={<PodiatryBillingServices />} />
          <Route path="/orthopedic-billing-services" element={<OrthopedicBillingServices />} />
          <Route path="/obgyn-billing-services" element={<ObgynBillingServices />} />
          <Route path="/psychiatry-billing-services" element={<PsychiatryBillingServices />} />
          <Route path="/nephrology-billing-services" element={<NephrologyBillingServices />} />
          <Route path="/case-study" element={<Casestudy />} />
          <Route path="/article-28-facilities" element={<ArticleFacilitiesPage />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* 404 catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;