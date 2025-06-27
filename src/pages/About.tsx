import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/images/profile.jpg';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const listItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const skills = [
  { name: 'Python', icon: <Code className="w-4 h-4" /> },
  { name: 'React', icon: <Code className="w-4 h-4" /> },
  { name: 'Java', icon: <Code className="w-4 h-4" /> },
  { name: 'SQL/PLSQL', icon: <Database className="w-4 h-4" /> },
  { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
  { name: 'Azure', icon: <Cloud className="w-4 h-4" /> },
  { name: 'Linux', icon: <Code className="w-4 h-4" /> },
];

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Avancé' },
  { name: 'Arabe', level: 'Langue maternelle' },
];

const interests = [
  'Intelligence Artificielle',
  'Développement Web & Mobile',
  'Robotique',
  'Lecture',
  'Voyages',
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-padding container-custom"
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('about.title')}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-xl font-semibold mb-2">{t('about.journey')}</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t('about.journey_text')}
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">{t('about.skills')}</h3>
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={listItemVariants}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 mt-6">{t('about.languages')}</h3>
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 space-y-2"
          >
            {languages.map((lang) => (
              <motion.li key={lang.name} variants={listItemVariants} className="text-gray-700 dark:text-gray-300">{lang.name} <span className="text-sm text-gray-500">({lang.level})</span></motion.li>
            ))}
          </motion.ul>
          <h3 className="text-xl font-semibold mb-3 mt-6">{t('about.interests')}</h3>
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {interests.map((interest) => (
              <motion.li key={interest} variants={listItemVariants} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">{interest}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur opacity-75"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.75 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            />
            <motion.img
              src={profileImage}
              alt="Abdessamad ELFOURI"
              className="relative w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-700"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.h3
            className="mt-6 mb-2 text-xl font-bold text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Abdessamad ELFOURI
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {t('about.role')}
          </motion.p>
          <motion.p
            className="text-lg text-center text-gray-700 dark:text-gray-300 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            "{t('about.quote')}"
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 