import React, { useState, useEffect } from 'react';
import {
  Menu,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Saraj (Demo)', href: '#ai-saraj', highlight: true },
    { name: 'NearU', href: '#near-u' },
    { name: 'Experience', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume & DSA', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/85 backdrop-blur-xl border-b border-gray-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 font-black tracking-wider text-sm group-hover:scale-105 transition-transform">
            ST
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base text-white tracking-tight flex items-center gap-1.5">
              <span>Sarthak Singh Tomar</span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-gray-400">IIIT Kota '26 • Full Stack & AI</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                link.highlight
                  ? 'text-red-400 hover:text-white hover:bg-red-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/sarthaktomar579"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/sarthak-tomar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-lg shadow-red-600/30 transition-transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-2xl border-b border-gray-800 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-gray-800 hover:text-red-400 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href="https://github.com/sarthaktomar579"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 text-gray-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sarthak-tomar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 text-gray-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
