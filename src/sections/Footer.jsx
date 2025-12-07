import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.github,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.linkedin,
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black dark:from-black dark:via-gray-950 dark:to-black text-gray-300 py-12 border-t border-gray-800/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium"
          >
            © {currentYear} <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{personalInfo.name}</span>. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800/50 dark:bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 border border-gray-700/50 hover:border-transparent"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 font-medium"
          >
            Built with <span className="text-blue-400">React</span> & <span className="text-purple-400">Vite</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
