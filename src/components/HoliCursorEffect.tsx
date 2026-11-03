import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface HoliParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
  friction: number;
  gravity: number;
  grow: number;
}

const HOLI_COLORS = [
  '#ff007f', // Vibrant Gulal Pink
  '#ff4500', // Saffron Orange
  '#ffd700', // Festive Gold/Yellow
  '#00e676', // Parrot Green
  '#00e5ff', // Electric Cyan
  '#b388ff', // Soft Purple
  '#ff1744', // Crimson Red
  '#ff6d00', // Deep Tangerine
  '#7c4dff', // Royal Violet
];

export const HoliCursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HoliParticle[]>([]);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if the current device is mobile or touch-only
    const isMobileDevice = () => {
      if (typeof window === 'undefined') return true;
      return (
        window.innerWidth < 768 ||
        window.matchMedia('(pointer: coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent || ''
        )
      );
    };

    // If mobile, do not activate any cursor trail or burst effects
    if (isMobileDevice()) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (isMobileDevice()) {
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
        return;
      }
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Desktop: Spawn trailing colored dust particles along mouse path
    const spawnMoveParticles = (x: number, y: number) => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        const color = HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.2 + 0.4;
        const radius = Math.random() * 4.5 + 2.5;

        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3,
          radius,
          color,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.018,
          friction: 0.96,
          gravity: 0.04,
          grow: 0.05,
        });
      }
    };

    // Desktop: Trigger Holi powder explosion on click
    const spawnBurst = (x: number, y: number) => {
      const burstCount = 65;
      for (let i = 0; i < burstCount; i++) {
        const color = HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 9 + 1.5;
        const radius = Math.random() * 6 + 3;

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius,
          color,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.014,
          friction: 0.93,
          gravity: 0.07,
          grow: 0.15,
        });
      }

      confetti({
        particleCount: 30,
        spread: 75,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ['#ff007f', '#ff4500', '#ffd700', '#00e676', '#00e5ff', '#b388ff'],
        disableForReducedMotion: true,
        startVelocity: 22,
        gravity: 0.9,
        ticks: 120,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileDevice()) return;
      spawnMoveParticles(e.clientX, e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      if (isMobileDevice()) return;
      spawnBurst(e.clientX, e.clientY);
    };

    // Attach listeners only for mouse / desktop
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    // Main Canvas Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.radius += p.grow;
        p.alpha -= p.decay;

        if (p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
