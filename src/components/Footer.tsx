import React from 'react';
import { ArrowUp, Heart, Terminal, Linkedin, Github, Mail, Code2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { LogoImage } from './ImageWithFallback';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer id="main-footer" className="relative border-t border-white/10 bg-[#050505] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Tier: Brand, Navigation, Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <LogoImage
              src={personalInfo.logo || "/logo2.png"}
              alt={`${personalInfo.name} Logo`}
              containerClassName="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-400 font-bold shadow-sm backdrop-blur-md overflow-hidden shrink-0"
              fallbackIcon={<Terminal className="w-5 h-5 text-cyan-400" />}
            />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                {personalInfo.role} • BICT (Hons)
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm backdrop-blur-md"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Bottom Tier: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-email"
              href={socialLinks.email}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center sm:text-right font-mono text-[11px] text-slate-400">
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
