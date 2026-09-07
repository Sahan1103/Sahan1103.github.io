import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LogoImage } from './ImageWithFallback';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  // Close mobile/tablet menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 sm:px-6 py-3">
          {/* Brand Logo */}
          <button
            type="button"
            id="nav-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1 cursor-pointer shrink-0"
            aria-label="Return to top"
          >
            <LogoImage
              src={personalInfo.logo || "/logo2.png"}
              alt={`${personalInfo.name} Logo`}
              containerClassName="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105 border border-white/10 shrink-0"
              fallbackText="S"
            />
            <div>
              <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight text-white flex items-center gap-1">
                {personalInfo.name}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Visible on xl and up, >= 1280px) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-400" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button (Visible on xl and up) */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              id="nav-cta-cv"
              href={personalInfo.resumeLink}
              download="Sahan_Maduranga_Resume.pdf"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-cyan-500/25 tracking-wide whitespace-nowrap"
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Mobile & Tablet Controls (Visible on all screens < xl: mobile & tablets) */}
          <div className="flex xl:hidden items-center gap-2.5 sm:gap-3">
            <a
              href={personalInfo.resumeLink}
              download="Sahan_Maduranga_Resume.pdf"
              className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-400 text-black px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm tracking-wide whitespace-nowrap"
            >
              DOWNLOAD CV
            </a>

            {/* Mobile & Tablet Hamburger Toggle Icon */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="xl:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"
          >
            <div className="bg-[#050505]/98 border border-white/15 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 shadow-2xl space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-white/10 text-cyan-400 border border-white/10 font-semibold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-white/10 mt-2 flex gap-2">
                <a
                  href={personalInfo.resumeLink}
                  download="Sahan_Maduranga_Resume.pdf"
                  className="flex-1 text-center py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-md transition-colors"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
