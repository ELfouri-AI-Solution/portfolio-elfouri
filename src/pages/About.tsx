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
        À propos de moi
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-xl font-semibold mb-2">Présentation</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Je suis Abdessamad Elfouri, étudiant en 4ème année cycle Ingénieur IA / Full stack développeur | Consultant en Solutions Digitales. Passionné par l'innovation, la cybersécurité et le développement full stack, ma mission est de rendre la technologie plus sécurisée, intelligente et accessible. J'ai une solide expertise technique et une passion pour la création de solutions digitales innovantes. Fort de 5 années d'expérience dans le développement de sites web et d'applications multimédia, je maîtrise les langages de programmation modernes et les principes de design interactif. Mon engagement pour l'excellence et ma capacité à travailler en équipe me permettent de mener à bien des projets complexes, tout en garantissant une expérience utilisateur optimale.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Langues</h3>
          <ul className="mb-4 space-y-2">
            <li>Chinois</li>
            <li>Arabe</li>
            <li>Français</li>
            <li>Anglais</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-6">Atouts</h3>
          <ul className="mb-4 space-y-2">
            <li>Adaptabilité aux changements technologiques</li>
            <li>Travail en équipe multidisciplinaire</li>
            <li>Créativité dans la conception de solutions logicielles</li>
            <li>Réactivité aux changements</li>
            <li>Diplomatie dans la gestion des conflits</li>
            <li>Sens aiguisé analytique et stratégique</li>
            <li>Négociation avec les fournisseurs de services cloud</li>
            <li>Capacité à résoudre des problèmes complexes</li>
            <li>Cohésion et motivation au sein d'une équipe collaborative</li>
            <li>Tolérance au stress</li>
            <li>Aptitude à former les utilisateurs finaux</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-6">Diplômes et Formations</h3>
          <ul className="mb-4 space-y-2">
            <li>4ème année cycle ingénieurs, Intelligence artificielle (Depuis octobre 2024, ISMAGI Rabat)</li>
            <li>Licence Professionnelle, Développement Web et Mobile (Depuis août 2023, ISMAGI Rabat, Maroc)</li>
            <li>Technicien Spécialisé en Développement Informatique (Octobre 2023 - Juin 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, Routage et Communication Initiation aux Réseaux (Novembre 2023 - Juin 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, Fundamentals Big Data Analytics (Octobre 2023 - Juin 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, Programming Essentials in C (Octobre 2023 - Mars 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, Programming Using HTML & CSS (Septembre 2023 - Février 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, IT Essentials (Novembre 2023 - Janvier 2024, ISTA NTIC Rabat)</li>
            <li>Attestation, Get Connected (Octobre 2023 - Décembre 2023, ISTA NTIC Rabat)</li>
            <li>Attestation, Programming Essentials In PYTHON (Octobre 2023 - Juin 2024, ISTA NTIC Rabat)</li>
            <li>Baccalauréat, Option Sciences de la Vie et de la Terre (Novembre 2023 - Juin 2024, Lycée Brahim Roudani Rabat)</li>
          </ul>
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
            Etudiant 4ème année cycle Ingénieur IA / Full stack développeur | Consultant en Solutions Digitales
          </motion.p>
          <motion.p
            className="text-lg text-center text-gray-700 dark:text-gray-300 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            "L'intelligence artificielle n'est pas le futur, c'est le présent qui façonne demain."
          </motion.p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Compétences</h3>
          <ul className="mb-4 space-y-2 text-left">
            <li>Déploiement sur serveurs cloud AWS</li>
            <li>Développement back-end Node.js</li>
            <li>Création d'interfaces utilisateur</li>
            <li>Développement front-end React</li>
            <li>Python, SQL, JavaScript, C++</li>
            <li>TensorFlow, Scikit-learn, LangChain</li>
            <li>spaCy, Transformers, ChatGPT API</li>
            <li>Git, VSCode, Docker, Streamlit</li>
            <li>PostgreSQL, MongoDB</li>
            <li>PHP, React.js, Node.js, Vue.js, Spring-boot</li>
            <li>Android (Java, Dart, SQLite)</li>
            <li>Java, HTML, CSS, Big Data Analytics, Réseaux (CCNA), Création d'API RESTful</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-6">Expériences professionnelles</h3>
          <ul className="mb-4 space-y-2 text-left">
            <li><b>Développeur full stack</b> (Depuis mars 2023, Rabat, Maroc) : Conception de solutions IA pour la cybersécurité, détection de phishing, création d'agents intelligents, intégration de modèles NLP, déploiement cloud, configuration d'infrastructures, tests unitaires, développement d'applications selon les besoins clients.</li>
            <li><b>Agent Support Technique</b> (Avril 2023 - Juillet 2023, Label Vie Skhirat, Maroc) : Support technique aux utilisateurs, résolution de problèmes informatiques.</li>
            <li><b>Support Technique</b> (Depuis novembre 2022, Ayouris Rabat) : Assistance et dépannage des équipements informatiques, maintenance préventive et corrective.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-6">Centres d'intérêt</h3>
          <ul className="mb-4 space-y-2">
            <li>Hybrid athlete</li>
            <li>Mountain bike</li>
            <li>Surf</li>
            <li>Réseaux sociaux</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 