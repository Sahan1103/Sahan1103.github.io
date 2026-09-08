import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, ExternalLink, Code2, Terminal, FolderGit2, Sparkles, CheckCircle } from 'lucide-react';
import { githubProfile } from '../data/portfolioData';

export const DeveloperSection: React.FC = () => {
  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Activity</span>
          </h2>
        </div>

        {/* Profile Banner & Metrics */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-md">
              <Github className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">@{githubProfile.username}</h3>
                <span className="text-[11px] font-mono text-cyan-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  Verified Developer
                </span>
              </div>
            </div>
          </div>

          <a
            id="visit-github-profile-btn"
            href={githubProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 shadow-sm transition-all hover:scale-105"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Repositories Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubProfile.repositories.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              id={`github-repo-card-${idx}`}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between space-y-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <FolderGit2 className="w-4 h-4" />
                    <span className="text-xs font-mono text-slate-400">Public Repo</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-base font-bold text-white font-mono truncate">
                  {repo.name}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-slate-400" /> {repo.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
