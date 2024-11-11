import React from 'react';
import { Badge, toolData, ToolTypeEnum } from '../data/toolData';

const groupedToolData = toolData.reduce((acc: any, logo: Badge) => {
  if (!acc[logo.type]) acc[logo.type] = []; 
  acc[logo.type].push(logo); 
  return acc;
}, {});

const LanguageGrid: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Technologies I Use</h2>
        {/* Render each tool type group */}
        {Object.keys(groupedToolData).map((type, typeIndex) => (
          <div key={typeIndex} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{ToolTypeEnum[parseInt(type)]}</h3>
            {/* Logos aligned in a responsive grid */}
            <div className="flex flex-wrap justify-center space-x-2 mb-2">
              {groupedToolData[type].map((logo: Badge, logoIndex: number) => (
                <a
                  key={logoIndex}
                  href={logo.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <img
                    className="space-x-2 mb-2"
                    src={logo.badge_url}
                    alt={logo.name}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageGrid;
