import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Deep Frosted Glass #050505 canvas */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Frosted ambient gradient glow orbs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-cyan-900/20 blur-[120px] rounded-full"
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"
      />
      <div 
        className="absolute top-[40%] left-[30%] w-[35%] h-[35%] bg-cyan-950/15 blur-[140px] rounded-full"
      />

      {/* Subtle fine frosted texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

