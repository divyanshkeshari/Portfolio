import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Code2, Rocket, Brain, Globe } from 'lucide-react';

const stats = [
  { label: 'Hackathons', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Certifications', value: '6+' },
  { label: 'Experience', value: '1 yr' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full shadow-[0_0_10px_#A855F7]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="text-accent" />
              The Developer Behind the Code
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              I'm a B.Tech CS-IT student at NIIST'28 Bhopal (RGPV University), 
              passionate about building a strong foundation in core CS concepts. 
              I love exploring new technologies, working on impactful projects, 
              and collaborating with peers through tech clubs, events, and hackathons!
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/5 text-center hover:border-accent/30 transition-all group"
                >
                  <p className="text-3xl font-display font-bold text-accent mb-1 group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={80} />
              </div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-accent" size={20} />
                Experience
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-accent/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#A855F7]" />
                  <p className="text-sm font-mono text-accent mb-1">April 2025 - Present</p>
                  <p className="font-bold">Google Developer Group Bhopal</p>
                  <p className="text-sm text-text-secondary">GDG Bhopal Member</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={80} />
              </div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-accent-secondary" size={20} />
                Education
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-accent-secondary/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_8px_#3B82F6]" />
                  <p className="text-sm font-mono text-accent-secondary mb-1">2024 - 2028</p>
                  <p className="font-bold">NIIST'28 Bhopal (RGPV University)</p>
                  <p className="text-sm text-text-secondary">Bachelor of Technology - BTech, Computer Science</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={80} />
              </div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="text-accent" size={20} />
                Current Focus
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Brain size={16} />
                  </div>
                  <div>
                    <p className="font-bold">AI & Machine Learning</p>
                    <p className="text-sm text-text-secondary">Deepening my understanding of neural networks and data science applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent-secondary/10 rounded-lg text-accent-secondary">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Full-Stack Development</p>
                    <p className="text-sm text-text-secondary">Mastering the MERN stack and exploring modern frontend architectures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-400/10 rounded-lg text-emerald-400">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Open Source Contribution</p>
                    <p className="text-sm text-text-secondary">Actively looking for impactful open-source projects to contribute to.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={80} />
              </div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-yellow-400" size={20} />
                Honors & Awards
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="font-bold">2nd Runner-Up</p>
                    <p className="text-sm text-text-secondary">TechTrack Case Battle Hackathon At @NITBHOPAL</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
