import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/images/profile.jpg';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-padding container-custom flex flex-col md:flex-row items-center gap-10"
    >
      {/* Photo pro */}
      <motion.img
        src={profileImage}
        alt="Abdessamad ELFOURI"
        className="w-40 h-40 rounded-full shadow-2xl object-cover border-4 border-primary-600 mb-6 md:mb-0 ring-4 ring-white dark:ring-gray-800 transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />
      {/* Présentation */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('home.title')}
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t('home.subtitle')}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('home.description')}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/abdessamad-elfouri-a66a38370/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="https://github.com/ELfouri-AI-Solution" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          <a href="/cv.pdf" download className="btn-primary">{t('home.download_cv')}</a>
          <a href="mailto:elfouri.ai.solution2026@gmail.com" className="btn-secondary">Email</a>
        </motion.div>
        <motion.blockquote
          className="italic text-gray-500 dark:text-gray-400 border-l-4 border-primary-600 pl-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          "{t('home.quote')}"
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default Home; 