import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface InteractiveAvatarProps {
  onQuoteClick?: () => void;
}

export const InteractiveAvatar: React.FC<InteractiveAvatarProps> = ({ onQuoteClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 }); // -1 to 1 normalized
  const [isHovered, setIsHovered] = useState(false);

  // Global cursor position tracking relative to avatar center
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rawDx = e.clientX - centerX;
      const rawDy = e.clientY - centerY;

      const maxDistX = window.innerWidth / 2;
      const maxDistY = window.innerHeight / 2;

      // Normalized coordinates bounded between -1 and 1
      const normX = Math.max(-1, Math.min(1, rawDx / maxDistX));
      const normY = Math.max(-1, Math.min(1, rawDy / maxDistY));

      setCoords({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute 3D rotation angles
  const rotateY = coords.x * 20; // Look left/right up to 20 deg
  const rotateX = -coords.y * 16; // Look up/down up to 16 deg

  return (
    <div className="relative flex flex-col items-center justify-center py-4 select-none" ref={containerRef}>
      {/* Ambient reactive glow aura */}
      <div
        className="absolute -inset-4 rounded-full blur-3xl opacity-40 transition-all duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(239, 68, 68, 0.45) 0%, rgba(6, 182, 212, 0.25) 50%, transparent 75%)`,
          transform: `scale(${isHovered ? 1.12 : 1}) translate(${coords.x * 12}px, ${coords.y * 12}px)`,
        }}
      />

      {/* Main 3D Interactive Head Stage */}
      <div
        className="relative perspective-1000 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative Subtle Accent Rings */}
        <div
          className="absolute -inset-5 rounded-full border border-red-500/20 border-dashed animate-spin pointer-events-none"
          style={{ animationDuration: '35s' }}
        />
        <div
          className="absolute -inset-8 rounded-full border border-cyan-500/15 pointer-events-none animate-spin"
          style={{ animationDuration: '50s', animationDirection: 'reverse' }}
        />

        {/* 3D Rotational Card Container */}
        <div
          className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden preserve-3d shadow-2xl transition-transform ease-out duration-100"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
              isHovered ? 1.04 : 1
            }, ${isHovered ? 1.04 : 1}, 1)`,
            border: '4px solid rgba(239, 68, 68, 0.65)',
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 ${
              isHovered ? '35px' : '22px'
            } rgba(239, 68, 68, 0.4), ${coords.x * -8}px ${coords.y * -8}px 25px rgba(6, 182, 212, 0.25)`,
          }}
        >
          {/* Base Real Generated Portrait Image with settled hair and visible t-shirt quote */}
          <img
            src="/avatar.png?v=8"
            alt="Sarthak Singh Tomar in Red T-Shirt"
            className="w-full h-full object-cover object-center transition-transform duration-200"
            style={{
              transform: `scale(1.02) translate(${coords.x * -3}px, ${coords.y * -3}px)`,
              filter: 'brightness(1.03) contrast(1.02)',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('.png')) {
                target.src = '/avatar.jpg?v=8';
              }
            }}
          />

          {/* Dynamic Light Sheen across glass on mouse move */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${
                115 + coords.x * 40
              }deg, rgba(255,255,255,0.18) 0%, transparent 45%, rgba(239,68,68,0.12) 100%)`,
            }}
          />
        </div>
      </div>

      {/* Quote Banner (Clean without "T-Shirt Thought" label) */}
      <div
        onClick={onQuoteClick}
        className="mt-7 max-w-lg w-full mx-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-950/70 via-gray-900/80 to-gray-950/90 border border-red-500/40 shadow-xl backdrop-blur-md flex items-center gap-3.5 group cursor-pointer hover:border-red-400 hover:scale-[1.02] transition-all duration-200"
      >
        <div className="w-9 h-9 rounded-xl bg-red-600/30 border border-red-500 flex items-center justify-center shrink-0 shadow-lg text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
          <Quote className="w-4 h-4" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm sm:text-base font-semibold text-white tracking-wide leading-snug">
            "Believe in your ability not in your luck, so go for it"
          </p>
        </div>
      </div>
    </div>
  );
};
