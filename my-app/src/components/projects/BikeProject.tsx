import React from "react";

const BikeProject: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-600 text-m mb-10">
          Designed a machine learning model to predict optimal bike-sharing demand, leveraging data
          analysis and deep learning to improve resource allocation and user experience.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">🚲 Project Overview</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-102">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Motivation</h3>
            <p className="text-gray-600 text-m">
              Current navigation apps like CityMapper and Google Maps lack predictive bike-sharing
              features. This project aims to fill that gap by providing forecasts to help reduce
              errors in bike availability and improve the overall user experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-102">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Objective</h3>
            <p className="text-gray-600 text-m">
              Build and analyze multiple machine learning models to predict bike-sharing demand in
              London. The project involves data preparation, model development, data visualization,
              and performance analysis to refine and optimize predictions.
            </p>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <img
            src="/images/map.png"
            alt="Map"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">💡 Machine Learning Modals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-10">
        <div className="text-center">
          <img
            src="/images/extra_tree.png"
            alt="Extra Trees Model"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">Extra Trees Model</p>
        </div>
        <div className="text-center">
          <img
            src="/images/LSTM.png"
            alt="LSTM Model"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">LSTM Model</p>
        </div>
        <div className="text-center">
          <img
            src="/images/neural_network.png"
            alt="Neural Network Model"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">Neural Network Model</p>
        </div>
        <div className="text-center">
          <img
            src="/images/regression.png"
            alt="Regression Model"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">Regression Model</p>
        </div>
      </div>
    </>
  );
};

export default BikeProject;
