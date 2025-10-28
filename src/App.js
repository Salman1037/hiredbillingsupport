import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Medical from './Pages/Hiretalent/medical';
import Dental from './Pages/Hiretalent/Dental';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/dental" element={<Dental />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;