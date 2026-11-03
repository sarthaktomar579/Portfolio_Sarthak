import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Terminal,
  Code,
  Flame,
  Star,
  Layers,
  Calendar,
  Building
} from 'lucide-react';

export const InteractiveResume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'dsa' | 'education'>('experience');

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#06b6d4', '#f59e0b', '#10b981']
    });
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Interactive Curriculum Vitae & Special Effects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume & Technical Profile
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl">
              Software Developer with hands-on production experience in AI-powered applications, high-throughput APIs, and 1500+ algorithmic problem-solving records.
            </p>
          </div>

          {/* Download Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Resume_Sarthak_Tomar.pdf"
              download="Resume_Sarthak_Tomar.pdf"
              onClick={triggerDownloadConfetti}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <a
              href="/Resume_Sarthak_Tomar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-medium text-sm flex items-center gap-2 transition-colors hover:border-cyan-500/50"
              title="Open Resume in new browser tab"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>View Resume in Browser</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-gray-900 border border-gray-800 mb-8 max-w-2xl">
          {[
            { id: 'experience', label: 'Work Experience', icon: Briefcase },
            { id: 'skills', label: 'Technical Stack', icon: Layers },
            { id: 'dsa', label: 'DSA & Competitions', icon: Award },
            { id: 'education', label: 'Education (IIIT Kota)', icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-800 shadow-2xl relative">
          
          {/* TAB 1: Work Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Role 1: Skygnosis */}
              <div className="relative pl-8 border-l-2 border-red-500/40 space-y-2">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-600 border-4 border-gray-950 shadow-md" />
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Full Stack Developer</span>
                    <span className="text-red-400 text-base">@ Skygnosis</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-red-950/60 text-red-300 text-xs font-mono border border-red-500/30 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    June 2026 – September 2026
                  </span>
                </div>

                <p className="text-xs text-gray-400 font-mono">Location: Remote / AI Clinical Intelligence Engineering</p>

                <ul className="space-y-2 text-sm text-gray-300 pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-1">▹</span>
                    <span>Developed end-to-end AI-powered applications integrating Large Language Models (LLMs), speech-to-text technologies, and automated medical documentation pipelines using <strong>FastAPI</strong> and <strong>Next.js</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-1">▹</span>
                    <span>Engineered asynchronous clinical summarization workflows reducing doctor transcription overhead by automating medical records and report extraction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-1">▹</span>
                    <span>Integrated third-party AI APIs and structured JSON schema validations to deliver high-reliability diagnostic summaries.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-3">
                  {['FastAPI', 'Next.js', 'Python', 'LLMs', 'Speech-to-Text', 'PostgreSQL', 'Tailwind CSS'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-gray-900 text-gray-300 text-xs font-mono border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role 2: Xelron AI */}
              <div className="relative pl-8 border-l-2 border-gray-800 space-y-2">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-700 border-4 border-gray-950" />
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Software Developer</span>
                    <span className="text-cyan-400 text-base">@ Xelron AI</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-400 text-xs font-mono border border-gray-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    March – June 2026
                  </span>
                </div>

                <p className="text-xs text-gray-400 font-mono">Location: Remote / AI Benchmarking & Systems</p>

                <ul className="space-y-2 text-sm text-gray-300 pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-1">▹</span>
                    <span>Engineered AI model evaluation frameworks and automated benchmark suites to test inference accuracy and latency metrics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-1">▹</span>
                    <span>Built Python data pipelines to analyze multi-modal model performance across edge cases and stress scenarios.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-3">
                  {['Python', 'Model Benchmarking', 'Data Pipelines', 'AI Evaluation', 'APIs'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-gray-900 text-gray-300 text-xs font-mono border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Skills & Tech Stack */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              
              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <Terminal className="w-4 h-4" />
                  <h4>Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C / C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML5 / CSS3'].map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-xl bg-gray-950 text-gray-200 text-xs font-mono border border-gray-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  <h4>Backend & APIs</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'FastAPI', cls: 'bg-teal-950/60 border-teal-500/50 text-teal-300 font-bold' },
                    { name: 'Node.js', cls: 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-bold' },
                    { name: 'Express.js', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                    { name: 'Django / DRF', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                    { name: 'REST APIs', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                    { name: 'WebSockets', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                  ].map(s => (
                    <span key={s.name} className={`px-3 py-1.5 rounded-xl text-xs font-mono border ${s.cls}`}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Code className="w-4 h-4" />
                  <h4>Frontend Engineering</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'React.js', cls: 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 font-bold' },
                    { name: 'Next.js (App Router)', cls: 'bg-violet-950/60 border-violet-500/50 text-violet-300 font-bold' },
                    { name: 'Tailwind CSS', cls: 'bg-sky-950/40 border-sky-600/40 text-sky-300' },
                    { name: 'Redux / Zustand', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                    { name: 'Vite', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                  ].map(s => (
                    <span key={s.name} className={`px-3 py-1.5 rounded-xl text-xs font-mono border ${s.cls}`}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <h4>AI & Machine Learning</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['LLM Integration', 'Google Gemini API', 'Speech-to-Text (Whisper)', 'Prompt Engineering', 'Model Evaluation'].map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-xl bg-gray-950 text-gray-200 text-xs font-mono border border-gray-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Building className="w-4 h-4" />
                  <h4>Databases & Caching</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'PostgreSQL', cls: 'bg-blue-950/60 border-blue-500/50 text-blue-300 font-bold' },
                    { name: 'MongoDB', cls: 'bg-green-950/60 border-green-500/50 text-green-300 font-bold' },
                    { name: 'Redis', cls: 'bg-red-950/40 border-red-700/40 text-red-300' },
                    { name: 'SQLite', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                    { name: 'SQLAlchemy', cls: 'bg-gray-950 border-gray-800 text-gray-200' },
                  ].map(s => (
                    <span key={s.name} className={`px-3 py-1.5 rounded-xl text-xs font-mono border ${s.cls}`}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <h4>DevOps & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Git & GitHub', 'Postman', 'Linux', 'Vercel', 'OAuth 2.0'].map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-xl bg-gray-950 text-gray-200 text-xs font-mono border border-gray-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DSA & Competitions */}
          {activeTab === 'dsa' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* LeetCode Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/30 via-gray-900 to-black border border-amber-500/30 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-amber-400 font-bold">
                        <Flame className="w-6 h-6 text-amber-500 animate-pulse" />
                        <h4 className="text-xl text-white">Knight on LeetCode</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                        Top Global %
                      </span>
                    </div>

                    <div className="text-4xl font-black text-amber-400 mb-2 font-mono">
                      1500+
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                      Algorithmic problems solved spanning Dynamic Programming, Graph Theory, Binary Trees, Greedy Algorithms, and Advanced Data Structures.
                    </p>
                  </div>

                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 underline"
                  >
                    <span>Verified Competitive Record</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* CodeChef Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/30 via-gray-900 to-black border border-red-500/30 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-red-400 font-bold">
                        <Star className="w-6 h-6 text-red-500 fill-red-500" />
                        <h4 className="text-xl text-white">3-Star Coder</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-mono font-bold border border-red-500/30">
                        CodeChef Division
                      </span>
                    </div>

                    <div className="text-4xl font-black text-red-400 mb-2 font-mono">
                      Rating ★★★
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                      Active participant in timed algorithmic contests demonstrating high-speed debugging, optimal time/space complexity analysis, and mathematical rigor.
                    </p>
                  </div>

                  <a
                    href="https://codechef.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 underline"
                  >
                    <span>CodeChef Contest Ratings</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          )}

          {/* TAB 4: Education */}
          {activeTab === 'education' && (
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">Indian Institute of Information Technology Kota (IIIT Kota)</h3>
                  <p className="text-red-400 font-medium text-sm mt-0.5">Bachelor of Technology (B.Tech) — 2022 to 2026 Batch</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                  Graduating 2026
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed pt-2">
                Rigorous training across Data Structures & Algorithms, Computer Networks, Operating Systems, Database Management Systems (DBMS), and Object-Oriented Software Design. Active technical contributor to institutional development teams.
              </p>

              <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
                <span>• Institute: IIIT Kota, Rajasthan</span>
                <span>• Hometown & Current Location: Gwalior, Madhya Pradesh</span>
                <span>• Focus: Full Stack Systems (Node.js & FastAPI), AI Systems & DSA</span>
                <span>• Contact: sarthakt579@gmail.com</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
