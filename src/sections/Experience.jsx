import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import Section from '../components/Section';
import { experience } from '../data';

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My Professional Journey"
      className="gradient-bg"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2 shadow-lg shadow-blue-500/30"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 pl-12 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white dark:border-gray-950 transform md:-translate-x-1/2 z-10 shadow-lg shadow-blue-500/50"></div>

              <div className="card-gradient rounded-3xl p-8 md:p-10 shadow-2xl card-hover border border-gray-200/60 dark:border-gray-800/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1.5">▸</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
