import React from 'react';
import {
  CreditCard,
  Heart,
  ShieldCheck,
  ExternalLink,
  Coins
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const FeaturedProjectSahara: React.FC = () => {
  const liveUrl = "https://sahara-works.vercel.app/";

  return (
    <section id="sahara-works" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Card wrapper */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
          {/* Subtle amber glow accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-amber-600/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/30 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                  Live Platform
                </span>
                <span className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-mono font-medium">
                  Next.js + Razorpay Payment Gateway
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sahara Works — <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Creator Crowdfunding & Fan Support</span>
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                A modern crowdfunding platform where creators, developers, and builders get funded directly by their fans and followers. Unleashes community-driven backing with instant payment settlements, custom supporter pledges, and interactive project progress goals.
              </p>

              {/* Key Features Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <CreditCard className="w-4 h-4" />
                    <span>Razorpay Gateway</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Integrated cards, UPI, and netbanking payments</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold">
                    <Heart className="w-4 h-4" />
                    <span>Fan Pledges</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Direct supporter funding & creator payout ledger</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Next.js App</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Server-side rendering, secure webhooks & Tailwind</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-600/30 flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Launch Sahara Works Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/sarthaktomar579"
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
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black p-5 border border-amber-500/30 shadow-2xl space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
                      <Heart className="w-5 h-5 fill-amber-500/40 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Sahara Works Live Checkout</h4>
                      <p className="text-[10px] text-emerald-400 font-mono">● Razorpay Secured Payment</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                    Live Web
                  </span>
                </div>

                {/* Simulated Crowdfunding Card */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-gray-200 space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-amber-400 font-bold">Goal Funded: ₹75,000</span>
                      <span className="text-emerald-400 font-mono">82% of target</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full w-[82%] rounded-full" />
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans">"Get funded by your fans and followers. Start now and unleash the power of community backing!"</p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-300">Pledge: ₹500 via UPI / Card</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      Settled
                    </span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-900">
                  {['Next.js', 'React', 'Razorpay API', 'Tailwind CSS', 'Webhooks', 'Vercel'].map((tech) => (
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
