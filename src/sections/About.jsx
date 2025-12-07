import { motion } from 'framer-motion';
import { about } from '../data';
import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Get to Know Me" className="gradient-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform -rotate-3 opacity-10"></div>
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden aspect-square shadow-2xl border-4 border-white dark:border-gray-800">
                {about.photo ? (
                  <img
                    src={about.photo}
                    alt="Yokeshwar L"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <svg
                      className="w-32 h-32"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl leading-relaxed font-medium">{about.content}</p>
              <div className="flex flex-wrap gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all border border-blue-200/50 dark:border-blue-700/50"
                >
                  Full Stack Development
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-800/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all border border-purple-200/50 dark:border-purple-700/50"
                >
                  AI Integration
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/40 dark:to-indigo-800/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all border border-indigo-200/50 dark:border-indigo-700/50"
                >
                  Problem Solving
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
