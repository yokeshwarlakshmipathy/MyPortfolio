import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import Section from '../components/Section';
import { education, certifications } from '../data';

const Education = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My Academic Journey"
      className="gradient-bg"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-gradient rounded-2xl p-6 md:p-8 border border-gray-200/60 dark:border-gray-800/60 hover:shadow-2xl hover:border-blue-300/60 dark:hover:border-blue-700/60 transition-all card-hover relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      CGPA:
                    </span>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-bold">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient rounded-2xl p-6 border border-blue-200/60 dark:border-blue-800/60 hover:shadow-2xl transition-all card-hover"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
