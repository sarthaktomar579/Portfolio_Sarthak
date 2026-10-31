import React from 'react';
import {
  Radio,
  Video,
  Languages,
  Palette,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const FeaturedProjectNearU: React.FC = () => {
  const liveUrl = "https://near-u-frontend.vercel.app/";

  return (
    <section id="near-u" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Card wrapper */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
          {/* Subtle cyan glow accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-cyan-600/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/30 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  Live Platform
                </span>
                <span className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-mono font-medium">
                  React + Node.js + MongoDB + WebSockets
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                NearU — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Language Exchange, Chat & Video Calls</span>
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                A web application where users learn new languages by connecting directly with native speakers through real-time chat and video calls. User profiles display native and target learning languages so members can match, practice, and communicate seamlessly.
              </p>

              {/* Key Features Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold">
                    <Languages className="w-4 h-4" />
                    <span>Language Match</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Native vs learning language profile discovery</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold">
                    <Video className="w-4 h-4" />
                    <span>Video & Chat</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Real-time instant messaging and video calling</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Palette className="w-4 h-4" />
                    <span>32 Themes</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Customizable DaisyUI UI themes & Zustand store</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Launch NearU Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/sarthaktomar579/NearU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            {/* Right Visual Representation (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black p-5 border border-cyan-500/30 shadow-2xl space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
                      <Languages className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Language Exchange Match</h4>
                      <p className="text-[10px] text-emerald-400 font-mono">● Online & Ready to Practice</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                    Live Web
                  </span>
                </div>

                {/* Simulated Language Exchange Card */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-gray-200">
                    <div className="flex justify-between items-center mb-1 text-[11px]">
                      <span className="text-cyan-400 font-medium">Native: English</span>
                      <span className="text-amber-400 font-medium">Learning: Hindi</span>
                    </div>
                    <p className="font-sans text-gray-300">"Looking forward to our scheduled video practice session on NearU!"</p>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-600/30 text-cyan-100 ml-4">
                    <div className="flex justify-between items-center mb-1 text-[11px]">
                      <span className="text-emerald-400 font-medium">Native: Hindi</span>
                      <span className="text-cyan-300 font-medium">Learning: English</span>
                    </div>
                    <p className="font-sans text-cyan-100">"Connecting via WebRTC & TanStack Query. Let's start the chat!"</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-900">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'Zustand', 'TanStack Query', 'DaisyUI'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-gray-900 text-gray-400 text-[10px] font-mono">
                      #{tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
