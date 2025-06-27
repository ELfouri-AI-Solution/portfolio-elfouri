import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/images/profile.jpg';
import { FaLanguage, FaAward, FaUserTie, FaBrain, FaTools, FaStar, FaBiking, FaSwimmer, FaUsers } from 'react-icons/fa';

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

const About: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    className="section-padding container-custom"
  >
    <div className="grid md:grid-cols-3 gap-8">
      {/* Colonne 1 : Présentation + Langues + Atouts */}
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={profileImage} alt="Abdessamad ELFOURI" className="w-20 h-20 rounded-full object-cover border-4 border-primary-600" />
            <div>
              <h2 className="text-2xl font-bold gradient-text">Abdessamad ELFOURI</h2>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">Étudiant 4ème année Ingénieur IA / Full stack développeur</p>
              <p className="text-sm text-gray-500">Consultant en Solutions Digitales</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Passionné par l'innovation, la cybersécurité et le développement full stack, ma mission est de rendre la technologie plus sécurisée, intelligente et accessible. J'ai une solide expertise technique et une passion pour la création de solutions digitales innovantes. Fort de 5 années d'expérience dans le développement de sites web et d'applications multimédia, je maîtrise les langages de programmation modernes et les principes de design interactif. Mon engagement pour l'excellence et ma capacité à travailler en équipe me permettent de mener à bien des projets complexes, tout en garantissant une expérience utilisateur optimale.
          </p>
          <blockquote className="italic text-primary-700 dark:text-primary-300 mt-4 border-l-4 border-primary-600 pl-4">
            "L'intelligence artificielle n'est pas le futur, c'est le présent qui façonne demain."
          </blockquote>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaLanguage /> Langues</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Chinois</span>
            <span className="badge">Arabe</span>
            <span className="badge">Français</span>
            <span className="badge">Anglais</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaUserTie /> Atouts</h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
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
        </div>
      </div>
      {/* Colonne 2 : Diplômes & Compétences */}
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaAward /> Diplômes & Formations</h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>4ème année cycle ingénieurs, Intelligence artificielle (Depuis octobre 2024, ISMAGI Rabat)</li>
            <li>Licence Pro, Développement Web et Mobile (Depuis août 2023, ISMAGI Rabat)</li>
            <li>Technicien Spécialisé en Développement Informatique (2023-2024, ISTA NTIC Rabat)</li>
            <li>Attestations : Routage, Big Data Analytics, C, HTML & CSS, IT Essentials, Get Connected, Python (ISTA NTIC Rabat)</li>
            <li>Baccalauréat, SVT (2023-2024, Lycée Brahim Roudani Rabat)</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaBrain /> Compétences</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="badge">AWS</span>
            <span className="badge">Node.js</span>
            <span className="badge">React</span>
            <span className="badge">Python</span>
            <span className="badge">SQL</span>
            <span className="badge">JavaScript</span>
            <span className="badge">C++</span>
            <span className="badge">TensorFlow</span>
            <span className="badge">Scikit-learn</span>
            <span className="badge">LangChain</span>
            <span className="badge">spaCy</span>
            <span className="badge">Transformers</span>
            <span className="badge">ChatGPT API</span>
            <span className="badge">Git</span>
            <span className="badge">VSCode</span>
            <span className="badge">Docker</span>
            <span className="badge">Streamlit</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">MongoDB</span>
            <span className="badge">PHP</span>
            <span className="badge">Vue.js</span>
            <span className="badge">Spring-boot</span>
            <span className="badge">Android</span>
            <span className="badge">Java</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">Big Data Analytics</span>
            <span className="badge">Réseaux (CCNA)</span>
            <span className="badge">API RESTful</span>
          </div>
        </div>
      </div>
      {/* Colonne 3 : Expériences & Centres d'intérêt */}
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaTools /> Expériences professionnelles</h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li><b>Développeur full stack</b> (Depuis mars 2023, Rabat) : Solutions IA pour la cybersécurité, détection de phishing, agents intelligents, NLP, cloud, tests, développement sur mesure.</li>
            <li><b>Agent Support Technique</b> (Avril 2023 - Juillet 2023, Label Vie Skhirat) : Support technique, résolution de problèmes informatiques.</li>
            <li><b>Support Technique</b> (Depuis novembre 2022, Ayouris Rabat) : Assistance, dépannage, maintenance informatique.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2"><FaStar /> Centres d'intérêt</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge"><FaBiking className="inline mr-1" /> Mountain bike</span>
            <span className="badge"><FaSwimmer className="inline mr-1" /> Surf</span>
            <span className="badge"><FaUsers className="inline mr-1" /> Hybrid athlete</span>
            <span className="badge">Réseaux sociaux</span>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default About; 