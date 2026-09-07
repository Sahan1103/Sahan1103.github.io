import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Download, Linkedin, Github, Mail, Sparkles, MapPin, Terminal, Briefcase } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { AvatarImage } from './ImageWithFallback';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Front Column: Profile Picture Card with Sahan Maduranga and Active */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-5 flex items-center justify-center relative order-1"
        >
          {/* Ambient glow backdrop */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-blue-500/20 rounded-full blur-3xl -z-10" />

          {/* Profile Card Container */}
          <div className="relative p-3 sm:p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/80">
            {/* Outer Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#050505]/80 group">
              <AvatarImage
                src={personalInfo.avatar || "/my.jpeg"}
                alt="Sahan Maduranga - Junior Full Stack Developer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                initials="SM"
              />
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-80" />

              {/* Tag inside frame */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Sahan Maduranga</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono font-medium text-emerald-300">Active</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Column: Introductions, CTA, Socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2"
        >
          {/* Headline and Name */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Junior Full Stack <br className="hidden sm:inline" />Developer.
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-medium text-slate-300">
              <span className="text-slate-400">Hi, I'm</span>
              <span className="font-semibold text-white">Sahan Maduranga</span>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            ICT undergraduate at <strong className="text-slate-200 font-semibold">University of Sri Jayewardenepura</strong>. I build robust digital experiences with a focus on clean code and intuitive design.
          </p>

          {/* Quick Location & Academic Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-300 font-mono">
            <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              BICT (Hons) Undergraduate
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
            <button
              id="hero-view-work-btn"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-talk-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>LET'S TALK</span>
            </button>

            <a
              id="hero-download-cv-btn"
              href={personalInfo.resumeLink}
              download="Sahan_Maduranga_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Socials
            </span>
            <div className="flex items-center gap-2.5">
              <a
                id="hero-social-linkedin"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-social-github"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={socialLinks.email}
                aria-label="Email Sahan Maduranga"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
