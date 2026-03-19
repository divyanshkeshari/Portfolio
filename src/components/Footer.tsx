import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp, Trophy } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter neon-text">
            DK<span className="text-accent">.</span>
          </a>
          <p className="text-sm text-text-secondary font-mono tracking-widest uppercase">
            © 2026 Divyansh Keshari. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/divyanshkeshari" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/divyansh-keshari-16763a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://unstop.com/u/divyakes33827?lb=iGjx5j0e&utm_medium=Share&utm_source=WhatsApp" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors" title="Unstop Profile">
            <Trophy size={20} />
          </a>
          <a href="mailto:divyanshkesari4@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all text-text-secondary hover:text-accent group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
    </footer>
  );
}
