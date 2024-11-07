import React from 'react';

const AnimalProject: React.FC = () => {

    return (
        <>
        <p className="text-gray-600 text-m mb-10">
                    This project is designed to provide children with a fun, engaging, and educational way to explore the animal kingdom. In a world with an increasing focus on online education, this website aims to make learning about animals accessible, interactive, and enjoyable for young users
                </p>
                <img src="/images/Animal_mobile.png" alt="mobile" className="project-image" />

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            💡 Purpose
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-102">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore the Animal Kingdom</h3>
                                <p className="text-gray-600 text-m">
                                    Browse through a variety of animals with detailed descriptions and fascinating facts. Learn about the diversity of species from around the world.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-102">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Learning with Data</h3>
                                <p className="text-gray-600 text-m">
                                    Not only can users learn about animals, but they can also gain a broader understanding through data visualizations, adding a unique, educational twist.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                </>
    );
};

export default AnimalProject;
