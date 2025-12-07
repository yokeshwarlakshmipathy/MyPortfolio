import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skills } from '../data';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Databases', items: skills.databases },
    { title: 'AI & ML', items: skills.ai },
    { title: 'Tools & Platforms', items: skills.tools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies I Work With"
      className="gradient-bg"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-gradient rounded-3xl p-8 shadow-2xl card-hover border border-gray-200/60 dark:border-gray-800/60 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b-2 border-gray-200/60 dark:border-gray-700/60 relative">
                <span className="relative z-10">{category.title}</span>
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
