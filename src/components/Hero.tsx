import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            Welcome to my digital universe
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Available for Collaboration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-none mb-6"
          >
            DIVYANSH <br />
            <span className="neon-text text-accent-secondary">KESHARI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-lg mb-8"
          >
            Aspiring Software Developer | BTech | CS-IT | @NIIST’28. 
            Building the future with code, creativity, and a touch of neon.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-primary-bg font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-accent/30 hover:bg-accent/10 rounded-full font-bold transition-all flex items-center gap-2"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 hover:border-accent/50 rounded-full font-bold transition-all hover:bg-white/5"
            >
              Let's Connect
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/divyanshkeshari" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-keshari-16763a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://unstop.com/u/divyakes33827?lb=iGjx5j0e&utm_medium=Share&utm_source=WhatsApp" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors" title="Unstop Profile">
              <Trophy size={24} />
            </a>
            <a href="mailto:divyanshkesari4@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image / 3D Element Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glow Halo */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-accent/30 shadow-[0_0_50px_rgba(0,255,156,0.2)] group">
            <img
              src="http://tmpfiles.org/dl/29628595/profile.jpg"
              alt="Divyansh Keshari"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              onError={(e) => {
                // Fallback if image is not uploaded yet
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/developer/800/800";
              }}
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 p-3 rounded-xl border border-white/10 overflow-hidden flex items-center gap-3 shadow-2xl"
            >
              {/* Blurred Image Background */}
              <div className="absolute inset-0 -z-10">
                <img 
                  src="http://tmpfiles.org/dl/29628595/profile.jpg" 
                  className="w-full h-full object-cover blur-xl scale-150 opacity-50" 
                  alt="" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/status/100/100";
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
              </div>

              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/20 shrink-0 shadow-lg">
                <img 
                  src="http://tmpfiles.org/dl/29628595/profile.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Status" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/status/100/100";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-mono text-accent uppercase tracking-tighter mb-0.5 opacity-80">Current Status</p>
                <p className="text-[13px] font-bold leading-tight text-white">Building AI-Powered Web Apps</p>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements for 3D depth */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-24 h-24 border border-accent/20 rounded-full border-dashed"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 w-16 h-16 bg-accent-secondary/10 rounded-2xl blur-xl"
          />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
