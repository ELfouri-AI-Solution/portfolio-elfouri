import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FilterBarProps {
  technos: string[];
  selected: string;
  onSelect: (tech: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ technos, selected, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3">
      <button
        className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${selected === '' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-primary-600'}`}
        onClick={() => onSelect('')}
      >
        {t('projects.filter_all')}
      </button>
      {technos.map((tech) => (
        <button
          key={tech}
          className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${selected === tech ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-primary-600'}`}
          onClick={() => onSelect(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default FilterBar; 