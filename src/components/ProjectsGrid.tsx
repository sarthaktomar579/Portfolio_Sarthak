import React, { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Mail,
  Activity,
  Sparkles,
  TrendingUp,
  Music,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'backend' | 'systems';
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  gradient: string;
  icon: any;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'applypilot',
    title: 'ApplyPilot AI (ApplyBuddy)',
    subtitle: 'Autonomous Job Outreach & Zero-Bounce Cold Email Engine',
    category: 'ai',
    description:
      'Engineered an autonomous technical recruiter outreach engine with connected Gmail API OAuth, 15-day duplicate shield, real-time DNS MX verification, and automatic PDF resume delivery.',
    tags: ['Python', 'FastAPI', 'React', 'Gmail API', 'PostgreSQL', 'Vite'],
    githubUrl: 'https://github.com/sarthaktomar579/ApplyBuddy',
    highlights: [
      '15-day duplicate shield scanning live Gmail Sent items',
      'Zero-bounce DNS MX resolver quarantine filtering ATS portals',
      'Dynamic pitch tailor matching AI, Backend, and Frontend stacks'
    ],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    icon: Mail,
  },
  {
    id: 'skygnosis',
    title: 'Skygnosis Clinical AI Suite',
    subtitle: 'Speech-to-Text Clinical Summarization Pipeline',
    category: 'ai',
    description:
      'Developed AI-powered medical documentation systems integrating LLMs and speech-to-text technologies to automate patient clinical records and diagnostic synthesis.',
    tags: ['FastAPI', 'Next.js', 'LLMs', 'Whisper STT', 'Python', 'Tailwind'],
    highlights: [
      'Automated medical consultation transcription & clinical notes extraction',
      'Multi-stage LLM reasoning for HIPAA-aligned medical summaries',
      'Asynchronous FastAPI REST services handling real-time audio payloads'
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    icon: Activity,
  },
  {
    id: 'support-ticket-triage',
    title: 'AI Support Ticket Triage',
    subtitle: 'Real-Time Gemini 2.0 Ticket Auto-Classifier',
    category: 'ai',
    description:
      'Full-stack support ticket triage application with real-time AI auto-categorization and priority prediction built with Django REST Framework, React, and Google Gemini API.',
    tags: ['Django REST', 'React', 'Gemini 2.0', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/sarthaktomar579/AI-Support-Ticket-Triage',
    highlights: [
      'Real-time debounced Gemini LLM classification as users type',
      'Graceful heuristic fallback engine when API limits are hit',
      'Docker containerized deployment with multi-service orchestration'
    ],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    icon: Cpu,
  },
  {
    id: 'metatradex',
    title: 'MetaTradeX Full-Stack',
    subtitle: 'Algorithmic Financial Trading & Market Execution',
    category: 'fullstack',
    description:
      'End-to-end trading platform featuring real-time market data streaming, order book state management, portfolio analytics, and automated trade execution logic.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com/sarthaktomar579/MetaTradeX-FullStack',
    highlights: [
      'Sub-second real-time market ticker updates over WebSockets',
      'Interactive candlestick charting and portfolio return calculation',
      'ACID transactional consistency for balance & ledger tracking'
    ],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    icon: TrendingUp,
  },
  {
    id: 'songgeet',
    title: 'SongGeet Platform',
    subtitle: 'Collaborative Music Streaming & Audio Rooms',
    category: 'fullstack',
    description:
      'Synchronized multi-user audio listening room platform enabling real-time playback synchronization, shared song queues, and live chat across peers.',
    tags: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Web Audio API'],
    githubUrl: 'https://github.com/sarthaktomar579/SongGeet',
    highlights: [
      'Clock-synchronized audio playback for multi-user listening rooms',
      'Dynamic drag-and-drop collaborative track queueing',
      'Web Audio API visualizer rendering live waveform frequency bars'
    ],
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    icon: Music,
  },
  {
    id: 'dwarwix-ai',
    title: 'Dwarwix AI Assistant',
    subtitle: 'Contextual Multi-Turn Agentic Assistant',
    category: 'ai',
    description:
      'Intelligent conversational agent integrating vector embeddings, semantic retrieval, and memory caches to deliver grounded domain responses.',
    tags: ['Python', 'FastAPI', 'Gemini API', 'FAISS', 'Next.js'],
    githubUrl: 'https://github.com/sarthaktomar579',
    highlights: [
      'Vector semantic search indexing technical documentation',
      'Sliding window conversation memory with token optimization',
      'FastAPI async streaming responses for fluid human interaction'
    ],
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    icon: Sparkles,
  }
];

export const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-mono font-medium mb-3">
              <Code2 className="w-3.5 h-3.5 text-red-400" />
              <span>Full-Stack & Systems Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Engineering Projects
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl">
              Production-grade applications spanning generative AI workflows, high-throughput backend APIs, real-time WebSockets, and algorithmic engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-gray-900 border border-gray-800">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & LLMs' },
              { id: 'fullstack', label: 'Full Stack' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl p-6 border border-gray-800 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-center text-red-400 group-hover:border-red-500/50 group-hover:bg-red-950/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-1"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-red-400/90 font-mono font-medium mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-5 border-t border-gray-800/80 pt-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-gray-400 flex items-start gap-1.5">
                        <span className="text-red-500 font-bold leading-none mt-1">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tags & Links */}
                <div className="pt-4 border-t border-gray-800/80 relative z-10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-gray-900 text-gray-400 text-[10px] font-mono border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-red-400 font-semibold group-hover:underline"
                    >
                      <span>View Architecture on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <span>Enterprise Healthcare AI Architecture</span>
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
