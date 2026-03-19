import { motion } from 'motion/react';
import { Code2, Brain, Database, Globe, Rocket, Shield } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building high-performance, responsive, and visually stunning web applications using modern frameworks like React and Next.js.',
    icon: <Globe size={32} />,
    color: '#A855F7',
  },
  {
    title: 'AI & Data Science',
    description: 'Leveraging machine learning algorithms and data analysis to extract insights and build intelligent systems.',
    icon: <Brain size={32} />,
    color: '#3B82F6',
  },
  {
    title: 'Backend Engineering',
    description: 'Designing scalable server-side architectures and robust APIs to power complex digital platforms.',
    icon: <Database size={32} />,
    color: '#A855F7',
  },
  {
    title: 'Software Architecture',
    description: 'Creating clean, maintainable, and efficient code structures that follow best practices and design patterns.',
    icon: <Code2 size={32} />,
    color: '#3B82F6',
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms like Google Cloud for maximum reliability and performance.',
    icon: <Rocket size={32} />,
    color: '#A855F7',
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Implementing security best practices to protect applications and user data from potential threats.',
    icon: <Shield size={32} />,
    color: '#3B82F6',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-secondary-bg/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            What I <span className="text-accent">Do</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full shadow-[0_0_10px_#A855F7]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${service.color}10`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative Glow */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
