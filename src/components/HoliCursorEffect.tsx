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
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Helper to spawn trailing dust particles along mouse path
    const spawnMoveParticles = (x: number, y: number) => {
      const count = 3; // 3 particles per move event for smooth dense trail
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
          decay: Math.random() * 0.025 + 0.018, // Fade out smoothly
          friction: 0.96,
          gravity: 0.04,
          grow: 0.05,
        });
      }
    };

    // Helper to trigger a massive Holi powder burst on click
    const spawnBurst = (x: number, y: number) => {
      // 1. Canvas particle burst (Holi powder spray)
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
          friction: 0.93, // Powder slows down as it blooms
          gravity: 0.07,
          grow: 0.15, // Clouds slightly expand
        });
      }

      // 2. Micro confetti burst from click point
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

    // Mouse Move Listener
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      spawnMoveParticles(e.clientX, e.clientY);
    };

    // Mouse Click / Burst Listener
    const handleClick = (e: MouseEvent) => {
      spawnBurst(e.clientX, e.clientY);
    };

    // Touch Support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnMoveParticles(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnBurst(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Main Canvas Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update physics
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.radius += p.grow;
        p.alpha -= p.decay;

        // If dead, remove particle
        if (p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        // Draw soft Holi colored powder dust circle with radial blur
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
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
