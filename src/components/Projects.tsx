import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'A futuristic dashboard for real-time data visualization with AI insights.',
    tech: ['React', 'D3.js', 'Gemini API', 'Tailwind'],
    image: 'https://picsum.photos/seed/project1/800/600',
    github: 'https://github.com',
    live: 'https://example.com',
    accent: '#00FF9C',
  },
  {
    title: 'Chandrayaan-3 Model Simulation',
    description: 'A 3D simulation of the Chandrayaan-3 mission, showcasing orbital mechanics.',
    tech: ['Three.js', 'React', 'Framer Motion'],
    image: 'https://picsum.photos/seed/project2/800/600',
    github: 'https://github.com',
    live: 'https://example.com',
    accent: '#00CFFF',
  },
  {
    title: 'Paperless Tech Platform',
    description: 'A digital solution for reducing paper waste in technical documentation.',
    tech: ['Next.js', 'Firebase', 'TypeScript'],
    image: 'https://picsum.photos/seed/project3/800/600',
    github: 'https://github.com',
    live: 'https://example.com',
    accent: '#FF00FF',
  },
  {
    title: 'Google Cloud Arcade Hub',
    description: 'A gamified platform for learning cloud concepts through interactive challenges.',
    tech: ['Node.js', 'Express', 'Google Cloud', 'React'],
    image: 'https://picsum.photos/seed/project4/800/600',
    github: 'https://github.com',
    live: 'https://example.com',
    accent: '#FFD700',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            Featured <span className="text-accent-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full shadow-[0_0_10px_#3B82F6]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl glass border border-white/5 hover:border-white/20 transition-all duration-500">
                {/* Image Preview */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-80" />
                  
                  {/* Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-black/50 backdrop-blur-md rounded-md border border-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-text-secondary hover:text-white"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-text-secondary hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Decorative Glow */}
                <div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: project.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
          >
            <Code2 size={18} /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
