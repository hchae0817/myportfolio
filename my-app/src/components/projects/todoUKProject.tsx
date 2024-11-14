import React from "react";

const TodoUKProject: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 relative">
        <p className="text-gray-600 text-m mb-10">
          This project aims to transform the data collection process into an interactive and live monitoring solution, enhancing stakeholders' ability to gain valuable insights and respond proactively to changing situations.
        </p>
        <div className="flex justify-center w-auto my-10 relative">
          <img
            src="/images/todoUK.png"
            alt="monitor"
            className="w-auto h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">🗠 Project Overview</h2>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {/* Purpose Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-blue-150 hover:to-blue-400 relative overflow-hidden">
            <div className="flex items-center mb-6">
              <span className="text-3xl text-blue-600 mr-4">💡</span>
              <h3 className="text-2xl font-semibold text-gray-800">Purpose</h3>
            </div>
            <ul className="text-gray-700 text-md space-y-2 list-disc pl-6">
              <li><span className="font-semibold">Explore Categories:</span> Users can browse through various categories such as landmarks, restaurants, entertainment, and more, making it easy to find places of interest.</li>
              <li><span className="font-semibold">Search by Tags:</span> Tags help narrow down search results, allowing users to find exactly what they are looking for based on specific themes or features.</li>
              <li><span className="font-semibold">Enquire for Details:</span> Users can fill out a simple enquiry form to request more information about specific places, ensuring they get the information they need to plan their visits.</li>
            </ul>
          </div>

          {/* Features Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-green-150 hover:to-green-400 relative overflow-hidden">
            <div className="flex items-center mb-6">
              <span className="text-3xl text-green-600 mr-4">💾</span>
              <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
            </div>
            <ul className="text-gray-700 text-md space-y-2 list-disc pl-3">
              <li><span className="font-semibold">User-Friendly Interface:</span> The website is designed to be intuitive and easy to navigate, making it accessible for users from diverse backgrounds.</li>
              <li><span className="font-semibold">Category and Tag Filtering:</span> Users can filter their search based on categories and tags, making it easier to discover new places.</li>
              <li><span className="font-semibold">Enquiry Form:</span> A straightforward form allows users to ask for more details about specific locations, enhancing their planning experience.</li>
              <li><span className="font-semibold">Responsive Design:</span> The site is built with responsiveness in mind, ensuring it looks great on all devices.</li>
            </ul>
          </div>
        </div>


      </div>
    </>
  );
};

export default TodoUKProject;
