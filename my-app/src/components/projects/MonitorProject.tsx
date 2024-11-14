import React from 'react';

const MonitorProject: React.FC = () => {

    return (
        <>
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-gray-600 text-m mb-10">
                    This project aims to transform the data collection process into an interactive and live monitoring solution, enhancing stakeholders' ability to gain valuable insights and respond proactively to changing situations.
                </p>
                <div className="flex justify-center my-10">
                    <img
                        src="/images/monitor.png"
                        alt="monitor"
                        className="w-auto max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">🗠 Project Overview</h2>

                <div className="grid gap-8 md:grid-cols-2 mb-20">


                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-150 relative overflow-hidden">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl text-blue-600 mr-2">🎯</span>
                            <h3 className="text-2xl font-semibold text-gray-800">Objective</h3>
                        </div>
                        <p className="text-gray-700 text-md leading-relaxed list-inside list-disc space-y-2">
                            <li>Careful planning of the database table structure.</li>
                            <li>Real-time population of data using SQL.</li>
                            <li>Implementation of an efficient API call system.</li>
                            <li>Creation of a visually appealing and color-coded alerting display.</li>
                        </p>
                    </div>

                    {/* Achievement Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-green-100 hover:to-green-150 relative overflow-hidden">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl text-green-600 mr-2">🏆</span>
                            <h3 className="text-2xl font-semibold text-gray-800">Achievement</h3>
                        </div>
                        <p className="text-gray-700 text-md leading-relaxed list-inside list-disc space-y-2">
                            <li>Developed a new alerting display for real-time data, enabling stakeholders to make informed decisions.</li>
                            <li>Streamlined the data monitoring process by eliminating the need for daily reports.</li>
                            <li>Enhanced the company’s monitoring capabilities for more efficient data management.</li>
                        </p>
                    </div>

                </div>


            </div>

        </>
    );
};

export default MonitorProject;
