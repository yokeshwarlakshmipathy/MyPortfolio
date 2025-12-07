import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon, href, onClick, download, target, className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 dark:shadow-blue-900/30 transition-all duration-300',
    secondary: 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-gray-900 dark:text-gray-100 border-2 border-gray-200/80 dark:border-gray-700/80 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20 transition-all duration-300 hover:scale-105',
    outline: 'bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white dark:hover:from-blue-500 dark:hover:to-indigo-500 transition-all duration-300',
  };

  const IconComponent = download ? Download : icon || ExternalLink;

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {IconComponent && <IconComponent className="w-4 h-4" />}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target !== undefined ? target : (href.startsWith('#') ? undefined : '_blank')}
        rel={href.startsWith('#') || download ? undefined : (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
        {IconComponent && <IconComponent className="w-4 h-4" />}
      </motion.a>
    );
  }

  return buttonContent;
};

export default Button;
