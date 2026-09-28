import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ITSupportLearning from './components/ITSupportLearning';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ITSupportLearning />
        <TechnicalSkills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;