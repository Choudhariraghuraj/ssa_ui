import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PoojaSchedule from './components/PoojaSchedule';
import HomePage from './pages/Home';
import Footer from './components/Footer';
import UnderConstructionBanner from './components/UnderConstructionBanner';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
/* import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer'; */

const App = () => {
  return (
    <Router>
      <UnderConstructionBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<PoojaSchedule />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
   {/*      <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
