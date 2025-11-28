import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-dark bg-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="h-0"></div> {/* Anchor point fix */}
        <Skills />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;