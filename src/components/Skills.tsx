import { motion } from 'motion/react';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    color: '#00FF9C',
  },
  {
    title: 'Backend',
    icon: <Database size={24} />,
    skills: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'PostgreSQL'],
    color: '#00CFFF',
  },
  {
    title: 'Languages',
    icon: <Terminal size={24} />,
    skills: ['JavaScript', 'Java', 'Python', 'C++', 'SQL'],
    color: '#FF00FF',
  },
  {
    title: 'AI & Data Science',
    icon: <Cpu size={24} />,
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Data Analysis', 'Python'],
    color: '#3B82F6',
  },
  {
    title: 'Tools & DevOps',
    icon: <Globe size={24} />,
    skills: ['Git', 'Docker', 'Google Cloud', 'Vercel', 'Postman'],
    color: '#FF4500',
  },
  {
    title: 'Other',
    icon: <Code2 size={24} />,
    skills: ['Problem Solving', 'UI/UX Design', 'Agile', 'Teamwork'],
    color: '#FFFFFF',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            Technical <span className="text-accent">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full shadow-[0_0_10px_#A855F7]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-2xl transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}10`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:border-accent/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Glow */}
              <div 
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Animated Progress Bars Placeholder */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#A855F7]" />
              Core Proficiency
            </h4>
            {[
              { name: 'JavaScript', level: 90 },
              { name: 'React', level: 85 },
              { name: 'Java', level: 80 },
              { name: 'Python', level: 75 },
            ].map((skill, i) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm font-mono uppercase tracking-widest text-text-secondary">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent to-accent-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-4 border-dashed border-accent/20 rounded-full flex items-center justify-center mb-6"
            >
              <Code2 size={48} className="text-accent animate-pulse" />
            </motion.div>
            <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Continuous Learning</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Always exploring the latest trends in AI, Web3, and Cloud Computing to build the next generation of digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
