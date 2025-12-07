import { motion } from 'framer-motion';
import { Github, Calendar } from 'lucide-react';
import Section from '../components/Section';
import { projects } from '../data';
import Button from '../components/Button';

const Projects = () => {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Projects I've Worked On"
      className="gradient-bg"
    >
      <div className="max-w-5xl mx-auto">
        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="card-gradient rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-300/60 dark:border-blue-700/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <span className="text-xl animate-pulse">⭐</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  Featured Project
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {featuredProject.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredProject.date}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {featuredProject.github && featuredProject.github !== '#' && (
                    <Button
                      variant="primary"
                      href={featuredProject.github}
                      icon={Github}
                    >
                      View Code
                    </Button>
                  )}
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl h-64 md:h-80 flex items-center justify-center shadow-2xl relative overflow-hidden group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <span className="text-white/30 text-9xl font-black relative z-10 group-hover/image:scale-110 transition-transform duration-500">
                    {featuredProject.title.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient rounded-2xl p-6 border border-gray-200/60 dark:border-gray-800/60 hover:shadow-2xl hover:border-blue-300/60 dark:hover:border-blue-700/60 transition-all card-hover relative overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-xl h-40 flex items-center justify-center mb-4 shadow-xl relative overflow-hidden group/image">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <span className="text-white/30 text-7xl font-bold relative z-10 group-hover/image:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.github && project.github !== '#' && (
                <Button
                  variant="outline"
                  href={project.github}
                  icon={Github}
                  className="w-full"
                >
                  View Code
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;