import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  ExternalLink,
  Mic,
  Brain,
  Video,
  CheckCircle2,
  Maximize2,
  X,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const FeaturedProjectSaraj: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const liveAppUrl = "https://ai-saraj.vercel.app/";
  const driveVideoUrl = "https://drive.google.com/file/d/1MCWdTDjUnTj0MGNdIhGqGfVm3lHYazrw/preview";
  const driveDirectUrl = "https://drive.google.com/file/d/1MCWdTDjUnTj0MGNdIhGqGfVm3lHYazrw/view?usp=sharing";

  return (
    <section id="ai-saraj" className="py-20 relative overflow-hidden">
      {/* Decorative gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Flagship Pill */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-red-500/10">
            <Sparkles className="w-4 h-4 text-red-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>★ Top Flagship AI Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            AI Saraj — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">AI-Powered Technical Interviewer</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-300 leading-relaxed">
            Instead of a human interviewer, an AI character called <strong className="text-white">"AI Saraj"</strong> conducts the entire technical interview — speaking questions out loud, listening to verbal answers, running timed DSA coding rounds, and evaluating candidates with Google Gemini AI.
          </p>
        </div>

        {/* Spotlight Showcase Container */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 md:p-10 border border-red-500/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Embedded Video & Visual Hook (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative group rounded-2xl overflow-hidden border border-red-500/40 bg-gray-950 shadow-2xl aspect-video">
                {/* Embedded Google Drive Video Preview */}
                <iframe
                  src={driveVideoUrl}
                  title="AI Saraj Project Demo Video"
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />

                {/* Floating overlay badge */}
                <div className="absolute bottom-3 left-3 bg-gray-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-500/40 text-xs font-medium text-white flex items-center gap-2 pointer-events-none">
                  <Video className="w-3.5 h-3.5 text-red-400" />
                  <span>Interactive System & Architecture Demo</span>
                </div>

                {/* Popout button */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute top-3 right-3 bg-gray-900/90 hover:bg-red-600 text-white p-2 rounded-xl backdrop-blur-md border border-gray-700 transition-colors shadow-lg"
                  title="Expand to Fullscreen Cinema Mode"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Video Quick Actions & Live Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  Practice & Scheduled Interview Modes Available
                </span>
                <a
                  href={driveDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium underline underline-offset-4"
                >
                  <span>Open Video in Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Capabilities & Architecture (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                  Live Deployment
                </span>
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold border border-amber-500/40">
                  AWS Backend
                </span>
                <span className="px-3 py-1 rounded-md bg-gray-800 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                  Vercel Frontend
                </span>
                <span className="px-3 py-1 rounded-md bg-purple-950/60 text-purple-300 text-xs font-mono font-medium border border-purple-500/30">
                  Gemini AI
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Voice Interviewer, Timed Coding Sandbox & Vision Proctoring
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Architected with a high-throughput <strong>FastAPI backend deployed on AWS</strong> and an ultra-responsive <strong>React frontend hosted on Vercel</strong>. Supports two specialized modes: <strong>Practice Mode</strong> for self-paced student mock rounds, and <strong>Scheduled Mode</strong> where interviewers assign customized AI rounds with deadlines. Includes automated webcam face detection and tab switch tracking to prevent malpractice.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-gray-900/70 border border-gray-800 flex items-start gap-2">
                  <Mic className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Voice Pipeline</h4>
                    <p className="text-[11px] text-gray-400">Speaks questions & transcribes verbal answers</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-gray-900/70 border border-gray-800 flex items-start gap-2">
                  <Brain className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Gemini AI</h4>
                    <p className="text-[11px] text-gray-400">Dynamic scorecards & algorithmic analysis</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-gray-900/70 border border-gray-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Vision Proctor</h4>
                    <p className="text-[11px] text-gray-400">Webcam face tracking & tab-switch monitoring</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-gray-900/70 border border-gray-800 flex items-start gap-2">
                  <CalendarCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Dual Modes</h4>
                    <p className="text-[11px] text-gray-400">Practice mock & scheduled recruiter rounds</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Primary Live Link */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={liveAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-400 text-white font-bold text-sm shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Video Demo</span>
                </button>

                <a
                  href="https://github.com/sarthaktomar579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 transition-colors"
                  title="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-gray-950 rounded-3xl border border-red-500/40 p-4 sm:p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-red-500" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  AI Saraj — System Architecture & Video Walkthrough
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-800 bg-black">
              <iframe
                src={driveVideoUrl}
                title="AI Saraj Full Video"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
              <a
                href={liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline flex items-center gap-1 font-semibold"
              >
                Launch AI Saraj Live App: {liveAppUrl} <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={driveDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline flex items-center gap-1 font-medium"
              >
                Open in Drive <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
