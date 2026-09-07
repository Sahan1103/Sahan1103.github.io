import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { DeveloperSection } from './components/DeveloperSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const programmaticScrollRef = useRef(false);

  // Reliable smooth scroll to section with offset handling
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    programmaticScrollRef.current = true;

    // Reset programmatic scroll flag after scroll completes
    setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 850);

    if (sectionId === 'home') {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        const navOffset = 85;
        const elementRect = element.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const targetPosition = Math.max(0, elementRect.top + currentScrollY - navOffset);
        window.scrollTo(0, targetPosition);
      }
    }
  };

  // Scroll listener to update active navigation item accurately via viewport coordinates
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'github', 'contact'];

    const handleScroll = () => {
      // Don't override active tab during programmatic smooth scroll
      if (programmaticScrollRef.current) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If at the very top, activate home
      if (scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // If scrolled near bottom of page, activate last item (contact)
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Check sections from bottom up to find the active section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element has reached upper area of viewport
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Screen Reader Skip Navigation */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Dynamic Animated Ambient Background */}
      <BackgroundEffects />

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Education />
        <Projects />
        <DeveloperSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
