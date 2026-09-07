import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, FolderGit2 } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  projectType?: 'Web App' | 'Desktop App' | 'Full Stack' | 'Frontend';
  title?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  projectType = 'Web App',
  title = "Project Preview"
}) => {
  const [hasError, setHasError] = useState(false);

  // If the user's real image file loads, display it.
  // If the file is not yet uploaded into /public, show a stylish UI mockup banner.
  if (hasError || !src) {
    const isTuition = title.toLowerCase().includes('tuition');
    const isVege = title.toLowerCase().includes('vegehut');

    return (
      <div className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 select-none ${
        isVege
          ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950'
          : isTuition
          ? 'bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950'
          : 'bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-950'
      }`}>
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Mockup UI card representation */}
        <div className="relative z-10 w-full max-w-[85%] rounded-lg border border-white/10 bg-slate-900/80 backdrop-blur-md p-4 shadow-xl">
          {/* Mockup header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px]">{src}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${
              isVege ? 'bg-emerald-500/20 text-emerald-400' :
              isTuition ? 'bg-blue-500/20 text-blue-400' : 'bg-cyan-500/20 text-cyan-400'
            }`}>
              {isVege ? <Layers className="w-6 h-6" /> :
               isTuition ? <Terminal className="w-6 h-6" /> :
               <Sparkles className="w-6 h-6" />}
            </div>
            <div>
              <p className="font-semibold text-sm text-slate-100">{title}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <FolderGit2 className="w-3 h-3" /> {projectType}
              </p>
            </div>
          </div>
        </div>

        {/* Status pill badge */}
        <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
          Ready for preview
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
};

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
  initials?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  initials = "SM"
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold relative group">
        <span className="text-3xl sm:text-4xl tracking-wider font-extrabold drop-shadow-md">
          {initials}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-200 mt-1 opacity-90">
          Dev
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
};

interface LogoImageProps {
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  fallbackText?: string;
  fallbackIcon?: React.ReactNode;
}

export const LogoImage: React.FC<LogoImageProps> = ({
  src = "/logo2.png",
  alt = "Brand Logo",
  className = "w-full h-full object-contain p-0.5",
  containerClassName = "w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105 border border-white/10 shrink-0",
  fallbackText = "S",
  fallbackIcon
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : fallbackIcon ? (
        fallbackIcon
      ) : (
        <span>{fallbackText}</span>
      )}
    </div>
  );
};

