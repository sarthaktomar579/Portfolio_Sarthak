import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const email = "sarthakt579@gmail.com";
  const phone = "+91 6377525805";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.85 } });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("6377525805");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const openEmail = (customSubject?: string, customBody?: string) => {
    const subject = customSubject || (formData.name ? `Portfolio Message from ${formData.name}` : 'Portfolio Inquiry');
    const body = customBody || (formData.message ? `Hi Sarthak,\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}\n\n---\nSent from Portfolio Website` : '');
    
    const subParam = encodeURIComponent(subject);
    const bodyParam = encodeURIComponent(body);

    const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${subParam}&body=${bodyParam}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subParam}&body=${bodyParam}`;
      window.open(gmailUrl, '_blank');
    }
  };

  const handleSendViaEmailApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    openEmail();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrorMsg("Please enter a message before sending.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "2d71d17c-1863-47e4-beee-198616e633a4",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `🚀 Portfolio Message from ${formData.name || 'Visitor'}`,
          from_name: `${formData.name || 'Visitor'} (Portfolio)`,
          replyto: formData.email,
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      } else {
        throw new Error(data.message || "Failed to deliver message");
      }
    } catch (err: any) {
      console.error("Web3Forms delivery error:", err);
      setErrorMsg(
        "Direct delivery failed. You can send your message directly via email:"
      );
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Open to software engineering roles, full-stack development, and AI engineering opportunities. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              {/* Email Card */}
              <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center justify-between group hover:border-red-500/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase">Direct Email</h4>
                    <a
                      href={`mailto:${email}`}
                      onClick={(e) => {
                        e.preventDefault();
                        openEmail();
                      }}
                      className="text-sm font-semibold text-white hover:text-red-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      title="Send email to sarthakt579@gmail.com"
                    >
                      <span>{email}</span>
                      <ExternalLink className="w-3 h-3 text-red-400" />
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase">Call / WhatsApp</h4>
                    <a href="https://wa.me/916377525805" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="https://wa.me/916377525805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Institute Card */}
              <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase">Current Location & Hometown</h4>
                  <p className="text-sm font-semibold text-white">
                    Gwalior, Madhya Pradesh • India
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Education: IIIT Kota (B.Tech 2022–2026)</p>
                </div>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex items-center justify-around">
              <a
                href="https://github.com/sarthaktomar579"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-red-400" />
                <span>GitHub Profile</span>
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <a
                href="https://www.linkedin.com/in/sarthak-singh-tomar-a7495428b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Box (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Delivered to Sarthak!</h3>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto">
                    Thank you for reaching out! Your message has been delivered directly to Sarthak's Gmail inbox. I will review it and reply promptly.
                  </p>

                  {/* Direct 1-Click Backup */}
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleSendViaEmailApp()}
                      className="px-4 py-2 rounded-xl bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white text-xs font-semibold border border-red-500/40 flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Copy via Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMsg(null);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-xl bg-gray-900 text-gray-300 text-xs font-semibold hover:bg-gray-800 border border-gray-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Sarthak, I explored your AI Saraj, NearU, and Sahara Works projects and would love to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs space-y-2">
                      <p className="leading-relaxed">{errorMsg}</p>
                      <button
                        type="button"
                        onClick={() => handleSendViaEmailApp()}
                        className="w-full py-2.5 px-3 rounded-lg bg-amber-500 text-black font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-400 transition-colors shadow-md"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open Mail App via mailto (Guaranteed Delivery)</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending to Sarthak's Inbox...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Sarthak</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
