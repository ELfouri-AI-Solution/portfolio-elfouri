import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image?: string;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, github, image }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
    >
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-xl" />}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">{tech}</span>
          ))}
        </div>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 btn-secondary mt-auto">
            <GithubIcon className="w-4 h-4" />
            <span>{t('projects.view_github')}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 