import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            Get In <span className="text-accent-secondary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full shadow-[0_0_10px_#3B82F6]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8">Let's build something <br /> <span className="text-accent">extraordinary</span> together.</h3>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:divyanshkesari4@gmail.com" className="text-lg font-bold hover:text-accent transition-colors">divyanshkesari4@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-accent-secondary/30 transition-all text-accent-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all text-accent">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/divyansh-keshari-16763a33b" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-accent transition-colors">Divyansh Keshari</a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all text-text-secondary hover:text-accent">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/divyansh-keshari-16763a33b" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent-secondary/30 transition-all text-text-secondary hover:text-accent-secondary">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-secondary uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-secondary uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-accent text-primary-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
