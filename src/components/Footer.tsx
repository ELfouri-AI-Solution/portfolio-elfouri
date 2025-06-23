import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  DownloadIcon 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/elfouri-abdessamad',
      icon: GithubIcon,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/abdessamad-elfouri',
      icon: LinkedinIcon,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:abdessamad.elfouri@example.com',
      icon: MailIcon,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <span className="font-bold text-xl gradient-text">Abdessamad ELFOURI</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Étudiant ingénieur en Intelligence Artificielle passionné par l'innovation technologique 
              et le développement de solutions intelligentes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/about' },
                { name: 'Projets', href: '/projects' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:abdessamad.elfouri@example.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                <MailIcon className="w-4 h-4" />
                <span>abdessamad.elfouri@example.com</span>
              </a>
              
              <a
                href="/cv.pdf"
                download
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Télécharger CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Abdessamad ELFOURI. Tous droits réservés.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
            Développé avec React, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 