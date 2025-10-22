import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <>
      <aside className="sidebar"><NavBar /></aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
