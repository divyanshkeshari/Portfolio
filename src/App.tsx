/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-primary-bg text-white selection:bg-accent selection:text-primary-bg">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left shadow-[0_0_10px_#A855F7]"
        style={{ scaleX }}
      />

      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>

      <Footer />
      
      {/* Custom Cursor Glow Effect (Optional, can be heavy on performance) */}
      <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-0 md:opacity-100">
        <div 
          className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]"
          id="cursor-glow"
        />
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          const glow = document.getElementById('cursor-glow');
          document.addEventListener('mousemove', (e) => {
            if (glow) {
              glow.style.left = e.clientX + 'px';
              glow.style.top = e.clientY + 'px';
            }
          });
        `
      }} />
    </div>
  );
}

