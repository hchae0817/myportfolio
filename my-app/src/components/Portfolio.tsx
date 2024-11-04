import React, { useEffect, useState } from 'react';
import LanguageGrid from './LanguageGrid';
import Wave from './ConnectSection';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One. Highlight key features and technologies used.',
        link: '#',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two. Highlight key features and technologies used.',
        link: '#',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three. Highlight key features and technologies used.',
        link: '#',
    },
    {
        title: 'Project Four',
        description: 'A brief description of Project Four. Highlight key features and technologies used.',
        link: '#',
    },
];

const Portfolio: React.FC = () => {

    const [showScrollUp, setShowScrollUp] = useState(false);

    useEffect(() => {
        // Show or hide scroll-up button based on scroll position
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollUp(true);
            } else {
                setShowScrollUp(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-100">
{/* 
             <Wave/> */}

            {/* Welcome Section */}
            <section className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
                <div>
                    <h1 className="text-5xl font-bold">Hello, I'm Hana Chae</h1>
                    <p className="mt-4 text-lg">A passionate front-end developer crafting beautiful and responsive web apps.</p>
                   <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script> 

                    <div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        onClick={scrollToBottom}
                    >
                        {/* <ChevronDownIcon className="h-10 w-10 text-white animate-bounce" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>
            </section>

            {/* Who You Are Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Who I Am</h2>
                    <p className="mt-6 text-lg text-gray-600">
                        I’m a front-end developer specializing in creating modern web applications with the latest technologies.
                        With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I love building
                        intuitive user interfaces that are both functional and aesthetically pleasing.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">My Work</h2>
                    <div className="mt-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`mt-10 ${index % 2 === 0 ? 'flex flex-row' : 'flex flex-row-reverse'} transition-all duration-700`}
                            >
                                <div className="w-full md:w-1/2 p-4">
                                    <div className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <a href={project.link} className="text-blue-500 hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-4">
                                    <div className="bg-gray-200 h-64 rounded-lg"> {/* Placeholder for images/screenshots */}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <LanguageGrid /> {/* Add this here */}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-8 bg-indigo-600 text-white text-center">
                <h2 className="text-3xl font-semibold">Let’s Connect</h2>
                <p className="mt-4 text-lg">Interested in working together? Let’s create something amazing.</p>
                <div className="mt-6 flex justify-center space-x-6">
                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/hana-chae-06a9001b8/" // Replace with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        <svg
                            className="w-8 h-8" // Tailwind classes for size
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19.5 3H4.5C3.119 3 2 4.119 2 5.5v13C2 19.881 3.119 21 4.5 21h15c1.381 0 2.5-1.119 2.5-2.5v-13C22 4.119 20.881 3 19.5 3zM9 19H6V9h3v10zm-1.5-11.25C7.67 7.75 7 7.08 7 6.25A1.75 1.75 0 019.25 6c.77 0 1.5.58 1.5 1.25S10.01 7.75 9.5 7.75zm12.5 11.25h-3v-5.25c0-1.25-.25-2.25-1.25-2.25-1 0-1.5.75-1.75 1.5-.1.25-.1.61-.1.91V19h-3v-10h3v1.5c.5-1 1.75-2.25 3.75-2.25 2.75 0 4.5 1.5 4.5 5v5.25z" />
                        </svg>
                    </a>
                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/hchae0817" // Replace with your GitHub URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition duration-300"
                    >
                        <svg
                            className="w-8 h-8" // Tailwind classes for size
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.25 3.438 9.688 8.207 11.287.6.111.793-.261.793-.577v-2.208c-3.338.724-4.042-1.606-4.042-1.606-.546-1.38-1.333-1.749-1.333-1.749-1.086-.741.082-.726.082-.726 1.203.084 1.834 1.229 1.834 1.229 1.068 1.843 2.803 1.309 3.49 1 .11-.773.418-1.309.761-1.607-2.665-.304-5.467-1.332-5.467-5.916 0-1.309.466-2.375 1.237-3.215-.124-.303-.537-1.529.118-3.176 0 0 1.007-.323 3.295 1.229a11.489 11.489 0 013.003-.403c1.018.004 2.036.137 3.003.403 2.287-1.553 3.295-1.229 3.295-1.229.655 1.647.243 2.873.12 3.176.772.84 1.237 1.906 1.237 3.215 0 4.596-2.804 5.608-5.467 5.912.43.372.818 1.104.818 2.224v3.293c0 .319.191.692.798.577C20.565 22.187 24 17.75 24 12.5 24 5.873 18.627.5 12 .5z" />
                        </svg>
                    </a>

                </div>
                <a href="mailto:hchae0817@gmail.com" className="mt-6 inline-block text-lg bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-600">
                    Get in Touch
                </a>
            </section>



            {showScrollUp && (
                <div
                    className="fixed bottom-8 right-8 cursor-pointer bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                    onClick={scrollToTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>


                </div>
            )}
        </div>
    );
};

export default Portfolio;
