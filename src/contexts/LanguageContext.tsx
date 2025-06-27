import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translations = language === 'fr' ? frTranslations : enTranslations;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const frTranslations: Record<string, string> = {
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.projects': 'Projets',
  'nav.contact': 'Contact',
  'home.title': 'Abdessamad ELFOURI',
  'home.subtitle': 'Étudiant ingénieur en Intelligence Artificielle',
  'home.description': 'Passionné par l\'innovation, l\'IA et le développement de solutions intelligentes. Mon objectif : concevoir des projets à fort impact, alliant intelligence artificielle, web et mobile.',
  'home.download_cv': 'Télécharger CV',
  'home.quote': 'L\'intelligence artificielle n\'est pas le futur, c\'est le présent qui façonne demain.',
  'about.title': 'À propos de moi',
  'about.journey': 'Parcours',
  'about.journey_text': 'Étudiant en 4ᵉ année à l\'ISMAGI – Rabat, double formation en Intelligence Artificielle et Développement Web/Mobile. Passionné par la résolution de problèmes complexes et l\'innovation technologique.',
  'about.skills': 'Compétences techniques',
  'about.languages': 'Langues',
  'about.interests': 'Centres d\'intérêt',
  'about.quote': 'L\'apprentissage continu et la curiosité sont les moteurs de mon parcours.',
  'projects.title': 'Projets',
  'projects.github_projects': 'Projets GitHub publics',
  'projects.filter_all': 'Tous',
  'projects.view_github': 'Voir sur GitHub',
  'contact.title': 'Contact',
  'contact.name': 'Nom',
  'contact.email': 'Email',
  'contact.message': 'Message',
  'contact.send': 'Envoyer',
  'contact.sent': 'Message envoyé !',
  'contact.direct_email': 'Email direct',
  'contact.networks': 'Réseaux',
  'footer.description': 'Étudiant ingénieur en Intelligence Artificielle passionné par l\'innovation technologique et le développement de solutions intelligentes.',
  'footer.navigation': 'Navigation',
  'footer.contact': 'Contact',
  'footer.download_cv': 'Télécharger CV',
  'footer.copyright': 'Tous droits réservés.',
  'footer.developed_with': 'Développé avec React, TypeScript et Tailwind CSS',
  'about.role': 'Étudiant Ingénieur en Intelligence Artificielle & Développement',
};

const enTranslations: Record<string, string> = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'home.title': 'Abdessamad ELFOURI',
  'home.subtitle': 'AI Engineering Student',
  'home.description': 'Passionate about innovation, AI, and developing intelligent solutions. My goal: design high-impact projects combining artificial intelligence, web and mobile development.',
  'home.download_cv': 'Download CV',
  'home.quote': 'Artificial intelligence is not the future, it is the present shaping tomorrow.',
  'about.title': 'About Me',
  'about.journey': 'Journey',
  'about.journey_text': '4th year student at ISMAGI – Rabat, dual training in Artificial Intelligence and Web/Mobile Development. Passionate about solving complex problems and technological innovation.',
  'about.skills': 'Technical Skills',
  'about.languages': 'Languages',
  'about.interests': 'Interests',
  'about.quote': 'Continuous learning and curiosity are the engines of my journey.',
  'projects.title': 'Projects',
  'projects.github_projects': 'Public GitHub Projects',
  'projects.filter_all': 'All',
  'projects.view_github': 'View on GitHub',
  'contact.title': 'Contact',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.message': 'Message',
  'contact.send': 'Send',
  'contact.sent': 'Message sent!',
  'contact.direct_email': 'Direct Email',
  'contact.networks': 'Networks',
  'footer.description': 'AI Engineering student passionate about technological innovation and developing intelligent solutions.',
  'footer.navigation': 'Navigation',
  'footer.contact': 'Contact',
  'footer.download_cv': 'Download CV',
  'footer.copyright': 'All rights reserved.',
  'footer.developed_with': 'Developed with React, TypeScript and Tailwind CSS',
  'about.role': 'AI Engineering Student & Developer',
}; 