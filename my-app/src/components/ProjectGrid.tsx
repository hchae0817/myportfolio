import React from 'react';
import { Link } from 'react-router-dom';
import { projectData, ProjectEnum } from '../data/projectData';

const ProjectGrid: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="bg-background shadow-xl rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 flex flex-col h-full"
        >
          <h3 className="text-xl font-semibold text-foreground/75 mb-2 min-h-[60px]">{project.title}</h3>

          {/* Preview Image (optional) */}
          {/* {project.id === ProjectEnum.Animal && (
            <img src="/images/Animal_Desktop.png" className="mb-4" alt="Desktop" />
          )} */}

          <p className="text-foreground/50 mb-4">{project.description}</p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center space-x-2 mb-4">
            {project.tools?.map((logo, logoIndex) => (
              <a key={logoIndex} href={logo.url || '#'} target="_blank" rel="noopener noreferrer">
                <img className="space-x-2 mb-2" src={logo.badge_url} alt={logo.name} />
              </a>
            ))}
          </div>

          {/* View Project Button */}
          <div className="mt-auto pt-4">
            <Link to={`/project/${project.id}`} onClick={scrollToTop} className="text-blue-500 hover:underline">
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
