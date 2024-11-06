import React, { Children, ReactNode, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../projectData';

interface BaseProjectProps {
    children?: ReactNode; // Accept children as a prop
}

const BaseProject: React.FC<BaseProjectProps> = ({ children }) => {
    const { id } = useParams<{ id: string }>(); // Get project ID from URL params
    const project = projectData.find((proj) => proj.id.toString() === id);
    const navigate = useNavigate();
    if (!project) {
        return <div>Project not found.</div>; // Handle case when the project is not found
    }


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">My Portfolio</h1>
                    <nav>
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    </nav>
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
                        <p className="text-lg text-gray-600 mt-4">{project.description}</p>
                    </div>

                    <div className="text-center mt-12">
                        {children}
                    </div>

                    {/* Technologies Used & Logos */}
                    <div className="mt-8 flex justify-center space-x-6 mb-12">
                        {project.logos?.map((logo, index) => (
                            <a key={index} href={logo.url || '#'} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={logo.badge_url} alt={logo.name} className="h-12" />
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex justify-center space-x-8">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                            View Live Project
                        </a>
                        <a href={project.repo.url} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors">
                            View Repository
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-8 mt-12">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p>&copy; 2024 Your Name. All Rights Reserved.</p>
                </div>
            </footer>

        </div >
    );
};

export default BaseProject;
