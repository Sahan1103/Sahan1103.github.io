import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectImage } from './ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const primaryImage = project.images[0] || '';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id={`project-card-${project.id}`}
      className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 shadow-xl flex flex-col justify-between"
    >
      {/* Top Image Preview Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-[#050505]">
        <ProjectImage
          src={primaryImage}
          alt={project.title}
          title={project.title}
          projectType={project.category}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />


        {/* Quick View Button overlay on image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            id={`view-details-hover-${project.id}`}
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <button
              onClick={() => onSelect(project)}
              className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
              aria-label={`Open details for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-md border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <a
            id={`project-github-${project.id}`}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>

          <button
            id={`project-modal-btn-${project.id}`}
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-black px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-colors cursor-pointer shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Explore</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
