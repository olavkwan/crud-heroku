import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import Beranda from './pages/Beranda';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Beranda />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
