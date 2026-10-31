import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-900 bg-gray-950 text-gray-400 text-xs relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
            ST
          </div>
          <span className="font-semibold text-gray-300">Sarthak Singh Tomar</span>
          <span>• IIIT Kota '26 Batch</span>
        </div>

        <div className="text-center font-mono text-[11px] text-gray-400">
          "Believe in your ability not in your luck, so go for it"
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sarthaktomar579"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/sarthak-tomar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sarthakt579@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors"
            title="Compose message in Gmail"
          >
            sarthakt579@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
};
