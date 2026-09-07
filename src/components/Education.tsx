import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Building2, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Qualifications</span>
          </h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-10">
          
          {educationData.map((item, index) => {
            const isLatest = index === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`education-item-${item.id}`}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline node icon */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
                  isLatest
                    ? 'bg-cyan-500 border-white text-black font-bold shadow-lg shadow-cyan-500/30'
                    : 'bg-[#050505] border-white/20 text-slate-400 group-hover:border-white/40 group-hover:text-white'
                }`}>
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Left Date label on desktop */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
                  <span className={`text-xs font-mono font-semibold px-2 py-1 rounded-md backdrop-blur-md ${
                    isLatest 
                      ? 'text-cyan-300 bg-white/10 border border-white/20' 
                      : 'text-slate-400 bg-white/5 border border-white/10'
                  }`}>
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-xl space-y-3">
                  
                  {/* Mobile Period Tag */}
                  <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        {item.institution}
                      </p>
                    </div>

                    {item.gradeOrType && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10 w-fit">
                        <Award className="w-3 h-3 text-cyan-400" />
                        {item.gradeOrType}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills/Tags acquired */}
                  {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-mono bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-full border border-white/10"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
