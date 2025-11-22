import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import './App.scss';

function App() {
  const location = useLocation();

  return (
    <div id="app">
      <aside id="sidebar">
        <NavBar />
      </aside>
      <main id="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
