import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import NavHome from '../NavHome';
import { Project } from '../../data/projectData';

interface BaseProjectProps {
    children?: ReactNode; // Accept children as a prop
    project: Project
}

const BaseProject: React.FC<BaseProjectProps> = ({ children, project }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">My Portfolio</h1>
                   <NavHome />
                </div>
            </header>

            <main className="flex-grow bg-gray-100 py-12 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="text-gray-500 hover:text-blue-600 mb-6 flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </button>

                    {/* Project Title and Description */}
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-gray-800">{project.title}</h2>
                        {/* <p className="text-lg text-gray-600 mt-4">{project.description}</p> */}
                    </div>

                    <div className="text-center mt-12">
                        {children}
                    </div>

                    {/* Technologies Used & Logos */}
                    {project.tools && (
                        <div className="flex flex-col md:flex-row items-center mt-3 space-y-3 md:space-y-0 md:space-x-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0 w-60">
                            👩‍💻 Technologies Used
                        </h2>
                        {project.tools.map((logo, index) => (
                            <a key={index} href={logo.url || '#'} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={logo.badge_url} alt={logo.name} />
                            </a>
                        ))}
                    </div>
                    )}
                    

                    <div className="flex flex-col md:flex-row items-center mt-3 space-y-3 md:space-y-0 md:space-x-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0 w-60">
                            👀 More Explore!
                        </h2>

                        {/* Live Project Button */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15l4-4-4-4m12 8l4-4-4-4m-9 4h7a4 4 0 100-8h-7a4 4 0 100 8z" />
                            </svg>
                            View Live Project
                        </a>

                        {/* Repository Button */}
                        <a
                            href={project.repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l6 6-6 6" />
                            </svg>
                            View Repository
                        </a>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-8 mt-12">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p>&copy; 2024 Hana Chae. All Rights Reserved.</p>
                </div>
            </footer>

        </div >
    );
};

export default BaseProject;
