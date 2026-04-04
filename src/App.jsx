import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Profile   from './components/Profile';
import Skills    from './components/Skills';
import Education from './components/Education';
import Projects  from './components/Projects';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
