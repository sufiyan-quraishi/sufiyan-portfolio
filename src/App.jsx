import { ToastProvider } from './components/Toast.jsx';
import Navbar from './components/Navbar.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import Hero from './sections/Hero.jsx';
import HighlightStrip from './sections/HighlightStrip.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Journey from './sections/Journey.jsx';
import Certificates from './sections/Certificates.jsx';
import ResumeSection from './sections/ResumeSection.jsx';
import Contact from './sections/Contact.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <HighlightStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Journey />
        <Certificates />
        <ResumeSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </ToastProvider>
  );
}
