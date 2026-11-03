import React from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Download,
  Play,
  Briefcase
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { InteractiveAvatar } from './components/InteractiveAvatar';
import { FeaturedProjectSaraj } from './components/FeaturedProjectSaraj';
import { FeaturedProjectNearU } from './components/FeaturedProjectNearU';
import { FeaturedProjectSahara } from './components/FeaturedProjectSahara';
import { ProjectsGrid } from './components/ProjectsGrid';
import { InteractiveResume } from './components/InteractiveResume';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HoliCursorEffect } from './components/HoliCursorEffect';

export const App: React.FC = () => {
  const triggerHeroConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#ef4444', '#06b6d4', '#f59e0b', '#3b82f6'],
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-red-500 selection:text-white">
      {/* Holi Interactive Cursor Particle & Burst Trail */}
      <HoliCursorEffect />

      {/* Top Fixed Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        {/* Ambient Top Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-medium mb-6 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2026 B.Tech • IIIT Kota</span>
            <span className="text-gray-500">•</span>
            <span className="text-amber-300">Gwalior, Madhya Pradesh</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-200">Full-Stack & AI</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
            Building Intelligent, Scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Full-Stack & AI Systems
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Hi, I'm <strong className="text-white font-semibold">Sarthak Singh Tomar</strong> from Gwalior, Madhya Pradesh. Full-stack developer with equal depth in high-throughput <strong className="text-emerald-400">Node.js</strong> and <strong className="text-teal-400">FastAPI</strong> backends, paired with modern <strong className="text-cyan-400">React</strong> and <strong className="text-violet-400">Next.js</strong> interfaces, robust databases in <strong className="text-green-400">MongoDB</strong> and <strong className="text-blue-400">PostgreSQL</strong>, and production <strong className="text-amber-400">LLM</strong> architectures.
          </p>

          {/* Colorful Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="px-3 py-1 rounded-xl bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-semibold shadow-md shadow-cyan-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              React
            </span>
            <span className="px-3 py-1 rounded-xl bg-violet-950/70 border border-violet-500/50 text-violet-300 text-xs font-mono font-semibold shadow-md shadow-violet-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Next.js
            </span>
            <span className="px-3 py-1 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold shadow-md shadow-emerald-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Node.js
            </span>
            <span className="px-3 py-1 rounded-xl bg-teal-950/70 border border-teal-500/50 text-teal-300 text-xs font-mono font-semibold shadow-md shadow-teal-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              FastAPI
            </span>
            <span className="px-3 py-1 rounded-xl bg-green-950/70 border border-green-500/50 text-green-300 text-xs font-mono font-semibold shadow-md shadow-green-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              MongoDB
            </span>
            <span className="px-3 py-1 rounded-xl bg-blue-950/70 border border-blue-500/50 text-blue-300 text-xs font-mono font-semibold shadow-md shadow-blue-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              PostgreSQL
            </span>
            <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-950/80 via-orange-950/70 to-rose-950/80 border border-amber-500/50 text-amber-300 text-xs font-mono font-semibold shadow-md shadow-amber-950/40 flex items-center gap-1.5 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              LLM Integration
            </span>
          </div>

          {/* ======================================================== */}
          {/* CENTERPIECE: INTERACTIVE AVATAR WITH CURSOR-FOLLOWING FACE & EYES */}
          {/* Wearing bright red t-shirt with quote & blue jeans */}
          {/* ======================================================== */}
          <div className="my-8 w-full">
            <InteractiveAvatar onQuoteClick={triggerHeroConfetti} />
          </div>

          {/* Primary Action Buttons for Top 3 Live Projects */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-2">
            <a
              href="#ai-saraj"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>AI Saraj (Live & Demo)</span>
            </a>

            <a
              href="#near-u"
              className="px-5 py-3 rounded-2xl bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-200 border border-cyan-500/40 font-semibold text-sm shadow-lg shadow-cyan-950 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>NearU (Live Social)</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href="#resume"
              className="px-5 py-3 rounded-2xl bg-amber-950/80 hover:bg-amber-900/80 text-amber-200 border border-amber-500/40 font-semibold text-sm shadow-lg shadow-amber-950 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Work Experience</span>
              <Briefcase className="w-4 h-4 text-amber-400" />
            </a>

            <a
              href="#resume"
              className="px-4 py-3 rounded-2xl bg-gray-900/90 hover:bg-gray-800 text-gray-300 border border-gray-800 font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-gray-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Hero Quick Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 max-w-4xl w-full">
            <a
              href="https://leetcode.com/u/Sarthak_Tomar579/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-gray-800 text-center hover:border-amber-500/40 hover:bg-amber-950/10 transition-all group block"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform">1500+</div>
              <div className="text-xs text-gray-400 font-medium mt-1 group-hover:text-amber-300 transition-colors">DSA Solved (LeetCode Knight ↗)</div>
            </a>

            <a
              href="https://www.codechef.com/users/sarthak_stomar"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-gray-800 text-center hover:border-red-500/40 hover:bg-red-950/10 transition-all group block"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono group-hover:scale-105 transition-transform">★★★</div>
              <div className="text-xs text-gray-400 font-medium mt-1 group-hover:text-red-300 transition-colors">CodeChef Rating ↗</div>
            </a>

            <div className="glass-panel p-4 rounded-2xl border border-gray-800 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono">Node.js & FastAPI</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Full-Stack Core Backends</div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-gray-800 text-center">
              <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">Gwalior, MP</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Hometown & Base (IIIT Kota '26)</div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED LIVE PROJECT 1: AI SARAJ WITH EMBEDDED DEMO VIDEO */}
      <FeaturedProjectSaraj />

      {/* FEATURED LIVE PROJECT 2: NEARU REAL-TIME SOCIAL & LANGUAGE LEARNING */}
      <FeaturedProjectNearU />

      {/* FEATURED LIVE PROJECT 3: SAHARA WORKS CROWDFUNDING & RAZORPAY */}
      <FeaturedProjectSahara />

      {/* PROJECTS GRID: APPLYPILOT, SKYGNOSIS, TICKET TRIAGE, METATRADEX, SONGGEET */}
      <ProjectsGrid />

      {/* INTERACTIVE RESUME & SPECIAL EFFECTS */}
      <InteractiveResume />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
export default App;
