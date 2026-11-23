import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar brandname="Alpha Extra" />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home brandname="Alpha Extra" />} />
          <Route path="/about" element={<About brandname="Alpha Extra" />} />
          <Route path="/contact" element={<Contact brandname="Alpha Extra" />} />
        </Routes>
      </div>

      <Footer brandname="Alpha Extra" />
    </div>
  );
}

export default App; 