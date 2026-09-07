import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Server, 
  Cpu, 
  Terminal, 
  Database, 
  Flame, 
  GitBranch, 
  Github, 
  Image, 
  PenTool, 
  FileSpreadsheet, 
  Layers, 
  Wind, 
  Box, 
  Network, 
  FileText, 
  DatabaseZap,
  CheckCircle,
  Sparkles,
  Search
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Palette,
  Server,
  Cpu,
  Terminal,
  Database,
  Flame,
  GitBranch,
  Github,
  Image,
  PenTool,
  FileSpreadsheet,
  Layers,
  Wind,
  Box,
  Network,
  FileText,
  DatabaseZap
};

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'Programming' | 'Tools' | 'Design';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: CategoryFilter[] = [
    'All',
    'Frontend',
    'Backend',
    'Programming',
    'Tools',
    'Design'
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tech Stack</span>
          </h2>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`skill-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-black font-bold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="skills-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. Java, PHP)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill: SkillItem) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="group relative rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 flex flex-col items-center text-center justify-between min-h-[140px]"
                >
                  {/* Category badge */}
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate max-w-[85px]">
                      {skill.category === 'Future Technologies' ? 'Upcoming' : skill.category}
                    </span>
                    {skill.isCurrent ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" title="Verified in Projects" />
                    ) : (
                      <span className="text-[9px] font-mono text-cyan-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                        Learning
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all duration-300 my-1">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Name */}
                  <div className="w-full mt-2">
                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {skill.name}
                    </h3>
                  </div>


                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No technologies found matching your filter criteria.
          </div>
        )}


      </div>
    </section>
  );
};
