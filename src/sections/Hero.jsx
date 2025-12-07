import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, Eye } from 'lucide-react';
import { personalInfo } from '../data';
import Button from '../components/Button';
import ResumeViewer from '../components/ResumeViewer';

// Animated Name Component
const AnimatedName = ({ name }) => {
  const words = name.split(' ');

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex gap-0.5 md:gap-1">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="text-gradient inline-block cursor-default"
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.6 + wordIndex * 0.15 + letterIndex * 0.04,
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.15,
                y: -5,
                transition: { duration: 0.2 },
              }}
              style={{
                display: 'inline-block',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-500/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-indigo-400/30 dark:bg-indigo-500/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 animate-blob animation-delay-6000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-8000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <motion.p 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs md:text-sm font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em] mb-8 inline-block px-5 py-2.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 dark:text-white mb-10 leading-[1.1]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block mb-3 md:mb-4 text-gray-700 dark:text-gray-300"
              >
                Hi, I'm
              </motion.span>
              <div className="mt-4">
                <AnimatedName name={personalInfo.name} />
              </div>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed font-semibold"
          >
            {personalInfo.tagline}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Crafting innovative solutions with code • Designing exceptional digital experiences
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              onClick={() => setIsResumeOpen(true)}
              icon={Eye}
              className="px-8 py-4 text-base font-semibold"
            >
              View Resume
            </Button>
            <Button
              variant="secondary"
              href={personalInfo.github}
              icon={Github}
              className="px-8 py-4 text-base font-semibold"
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              href={personalInfo.linkedin}
              icon={Linkedin}
              className="px-8 py-4 text-base font-semibold"
            >
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;
