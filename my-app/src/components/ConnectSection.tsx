import React from 'react';
import Lottie from 'lottie-react'; // Ensure correct import

const wavingAnimation = `${process.env.PUBLIC_URL}/waving.json`; // Adjust path as necessary

const Wave = () => {
    return (
        <section className="py-20 px-8 bg-indigo-600 text-white text-center">
            <h2 className="text-3xl font-semibold">Let’s Wave Hello!</h2>
            <p className="mt-4 text-lg">Interested in connecting? Let’s create something amazing.</p>
            <div className="mt-6 flex justify-center items-center space-x-6">
                <Lottie
                    animationData={wavingAnimation}
                    loop={true}
                    style={{ width: '80px', height: '80px' }}
                />
            </div>
        </section>
    );
};

export default Wave;
