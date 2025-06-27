import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';
import projectsData from '../data/projects.json';
import fetchGithubProjects from '../utils/fetchGithubProjects';
import { useLanguage } from '../contexts/LanguageContext';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const allTechnos = [
  ...new Set(projectsData.flatMap((p: any) => p.technologies)),
];

const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetchGithubProjects('ELfouri-AI-Solution').then(setGithubProjects);
  }, []);

  const filteredProjects = selectedTech
    ? projectsData.filter((p: any) => p.technologies.includes(selectedTech))
    : projectsData;

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-padding container-custom"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('projects.title')}
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <FilterBar technos={allTechnos} selected={selectedTech} onSelect={setSelectedTech} />
      </motion.div>
      <motion.div
        key={selectedTech}
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {filteredProjects.map((project: any) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
      <motion.h3
        className="text-2xl font-semibold mt-16 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('projects.github_projects')}
      </motion.h3>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {githubProjects.map((repo: any) => (
          <ProjectCard
            key={repo.id}
            title={repo.name}
            description={repo.description}
            technologies={repo.topics || []}
            github={repo.html_url}
            image="/github-project.png"
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects; 