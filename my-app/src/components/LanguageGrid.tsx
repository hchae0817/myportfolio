import React from 'react';
import { 
    CodeIcon as JavaScriptIcon, 
    DocumentTextIcon as SqlIcon, 
    PencilIcon as TypeScriptIcon, 
    TerminalIcon as CSharpIcon, 
    BookOpenIcon as PythonIcon 
} from '@heroicons/react/outline'; // Adjust these imports according to your icon choice

const languages = [
  { name: 'JavaScript', color: 'bg-yellow-500', icon: <JavaScriptIcon className="h-8 w-8" /> },
  { name: 'TypeScript', color: 'bg-blue-600', icon: <TypeScriptIcon className="h-8 w-8" /> },
  { name: 'C#', color: 'bg-purple-600', icon: <CSharpIcon className="h-8 w-8" /> },
  { name: 'SQL', color: 'bg-green-500', icon: <SqlIcon className="h-8 w-8" /> },
  { name: 'Python', color: 'bg-blue-400', icon: <PythonIcon className="h-8 w-8" /> },
];

const LanguageGrid: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Technologies I Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`relative group h-32 w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${language.color}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-100 transition-opacity duration-300">
                {language.icon}
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                <h2 className="text-2xl font-semibold">{language.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageGrid;
