import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 backdrop-blur-sm border border-blue-200/60 dark:border-blue-800/60 shadow-lg"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                {title}
              </motion.h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
