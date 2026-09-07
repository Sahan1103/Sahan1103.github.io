import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Code2, Palette, Target, Compass, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AvatarImage } from './ImageWithFallback';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tech Enthusiast | Developer | Creative Designer</h3>
                </div>
              </div>

              {personalInfo.aboutLong.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Clean OOP Architecture & MVC Design</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Full-Stack Web Systems (PHP, SQL, React)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Adobe Creative Suite (Photoshop & Illustrator)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Continuous Learner of Modern Web Architectures</span>
              </div>
            </div>
          </motion.div>

          {/* Key Pillar Highlights & Statistics */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Developer Profile Card featuring my.jpeg */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-md flex items-center gap-4 shadow-lg hover:border-white/20 transition-all group"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-[#050505] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                <AvatarImage
                  src={personalInfo.avatar || "/my.jpeg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  initials="SM"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white truncate">{personalInfo.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Year 2
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-medium">BICT (Hons) Undergraduate</p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>

            {/* 4 Quick Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md text-center hover:bg-white/10 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Career Goal Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">
                  Long-term Vision
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                "My ambition is to grow into an innovative full-stack software engineer who bridges backend stability and modern user interfaces to create meaningful, accessible digital solutions that empower communities."
              </p>
            </motion.div>

            {/* Academic Track Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">University of Sri Jayewardenepura</h4>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">Faculty of Technology • BICT (Hons)</p>
                <p className="text-xs text-slate-400 mt-1">Specializing in Software Development & Data Technologies</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
