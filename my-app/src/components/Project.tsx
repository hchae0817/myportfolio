import React from 'react';
import { projectData } from './projectData';
import { Link } from 'react-router-dom';

interface Badge {
  name: string;
  badge_url: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  logos?: Badge[];
  repo: Badge;
  id: number;
}


const ProjectList: React.FC = () => {
    return (
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {/* Logos */}
            <div className="flex space-x-4 mb-4">
              {project.logos?.map((logo, logoIndex) => (
                <a key={logoIndex} href={logo.url || '#'} target="_blank" rel="noopener noreferrer">
                  <img src={logo.badge_url} alt={logo.name} />
                </a>
              ))}
            </div>
  
            <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">
            View Project
          </Link>
          </div>
        ))}
      </div>
    );
  }
export default ProjectList;
