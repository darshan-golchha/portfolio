import React from 'react';
import 'tailwindcss/tailwind.css';

const HomeInfo = () => {
  return (
    <div className="flex max-w-[80%] items-center max-h-screen justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg">
      <div className="p-8 rounded-lg transform transition duration-700 ease-in-out animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Introduction</h2>
        <p className="text-lg mb-4">
        Hi, I'm Darshan Golchha, a dedicated software developer and data scientist. With a passion for creating innovative solutions, I've honed my skills through impactful projects and a strong academic background at the University of Wisconsin-Madison. Discover My Work
        Explore my portfolio to see how I blend creativity with technology, from developing efficient algorithms to building dynamic web applications. Let's connect and create something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
