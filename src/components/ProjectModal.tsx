import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  FolderGit2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';
import { ProjectImage } from './ImageWithFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index whenever a new project is selected
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const handleNextImage = useCallback(() => {
    if (!project || project.images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const handlePrevImage = useCallback(() => {
    if (!project || project.images.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project]);

  // Keyboard navigation: Escape to close, Left/Right for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, handleNextImage, handlePrevImage]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const currentImage = project.images[currentImageIndex] || '';

  return (
    <AnimatePresence>
      <div 
        id="project-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#050505]/85 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0c101e]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/90 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-white/10 border border-white/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Project Showcase
              </span>
            </div>

            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            
            {/* Main Image Gallery Stage */}
            <div className="relative w-full h-64 sm:h-96 rounded-2xl bg-[#050505] border border-white/10 overflow-hidden flex items-center justify-center">
              <ProjectImage
                src={currentImage}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                title={project.title}
                projectType={project.category}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    id="modal-gallery-prev"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all transform hover:scale-105 cursor-pointer z-10"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    id="modal-gallery-next"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all transform hover:scale-105 cursor-pointer z-10"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom Image Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200 z-10 shadow-md">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {project.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    id={`modal-thumb-${idx}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      currentImageIndex === idx
                        ? 'border-cyan-400 scale-105 shadow-md'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ProjectImage
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      title={project.title}
                      projectType={project.category}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Project Details Content */}
            <div className="space-y-6">
              <div>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.title}
                </h2>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  Architecture & Implementation Details
                </p>
              </div>

              {/* Description paragraphs */}
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/10">
                {project.description.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Architectural Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Key Architectural Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Applied */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies & Frameworks Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-white/5 text-cyan-300 px-3 py-1.5 rounded-xl border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Tip: Use Left/Right Arrow keys to navigate gallery, Esc to exit
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                id="modal-source-code-btn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {project.liveDemo && (
                <a
                  id="modal-live-demo-btn"
                  href={project.liveDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
