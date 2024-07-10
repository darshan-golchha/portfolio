import React from 'react';
import 'tailwindcss/tailwind.css';

const HomeInfo = () => {
  return (
    <div className="flex max-w-[80%] items-center max-h-screen justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg">
      <div className="p-8 rounded-lg transform transition duration-700 ease-in-out animate-fadeIn">
        <p className="text-lg mb-4">
        Hi, I'm Darshan Golchha, a dedicated software developer and data scientist.
        </p><p>Please use the arrows below to navigate.</p>
      </div>
    </div>
  );
};

export default HomeInfo;
