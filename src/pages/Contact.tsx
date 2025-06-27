import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu pourrais ajouter une logique d'envoi de formulaire (ex: via EmailJS, Formspree)
    setSent(true);
    setTimeout(() => setSent(false), 3000); // Fait disparaître le message après 3s
    setForm({ name: '', email: '', message: '' });
  };

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
        {t('contact.title')}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">{t('contact.name')}</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 transition" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">{t('contact.email')}</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 transition" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">{t('contact.message')}</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 transition" />
          </div>
          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contact.send')}
          </motion.button>
          {sent && <p className="text-green-500 mt-2 font-medium animate-fade-in">{t('contact.sent')}</p>}
        </motion.form>
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h3 className="font-semibold mb-2 text-lg">{t('contact.direct_email')}</h3>
            <a href="mailto:elfouri.ai.solution2026@gmail.com" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">elfouri.ai.solution2026@gmail.com</a>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">{t('contact.networks')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/abdessamad-elfouri-a66a38370/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
              <a href="https://github.com/ELfouri-AI-Solution" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 