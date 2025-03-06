import React, { useState, useEffect } from 'react';
import { Terminal, Code, StepBack, StepForward } from 'lucide-react';

const ProjectsTerminal = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [typing, setTyping] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  useEffect(() => {
    if (!typing || !projects || projects.length === 0) return;
    
    const command = projects[currentProject].command;
    
    if (commandIndex < command.length) {
      const typingTimer = setTimeout(() => {
        setCommandIndex(prev => prev + 1);
      }, 50 + Math.random() * 50);
      return () => clearTimeout(typingTimer);
    } else {
      setTyping(false);
      const nextProjectTimer = setTimeout(() => {
        const nextProject = (currentProject + 1) % projects.length;
        setCurrentProject(nextProject);
        setCommandIndex(0);
        setTyping(true);
      }, 10000);
      return () => clearTimeout(nextProjectTimer);
    }
  }, [typing, commandIndex, currentProject, projects]);
  const navigateProject = (direction) => {
    if (!projects || projects.length === 0) return;
    
    const nextProject = direction === 'next'
      ? (currentProject + 1) % projects.length
      : (currentProject - 1 + projects.length) % projects.length;
    
    setCurrentProject(nextProject);
    setCommandIndex(0);
    setTyping(true);
  };
  if (!projects || projects.length === 0) {
    return (
      <section className="mb-16 px-4">
        <div className="flex items-center gap-2 mb-6">
          <Code className="text-purple-600" size={24} />
          <h2 className="text-3xl font-semibold">Recent Projects</h2>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-xl p-6 text-white font-mono">
          No projects data available.
        </div>
      </section>
    );
  }

  // Parse tech stack into array
  const techStack = projects[currentProject].tech.split(', ');

  return (
    <section className="mb-16 px-4">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-3xl font-semibold">Recent Projects</h2>
        {/* Showing: To see my top projects, visit the projects page, as a non-significant message below the heading */}
        <span className="text-gray-500 text-sm">To see my top projects, visit the projects page</span>
      </div>
      
      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">~zsh</div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigateProject('prev')}
              className="text-white transition-colors"
            >
              <StepBack />
            </button>
            <button 
              onClick={() => navigateProject('next')}
              className="text-white transition-colors"
            >
              <StepForward />
            </button>
          </div>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="flex items-center text-green-400 mb-3">
            <Terminal size={16} className="mr-2" />
            <span className="text-blue-400">darshan</span>
            <span className="text-white mx-1">@</span>
            <span className="text-purple-400">portfolio</span>
            <span className="text-white mx-1">:~$</span>
            <span className="ml-2">
              {projects[currentProject].command.substring(0, commandIndex)}
              {typing && showCursor ? <span className="animate-pulse">|</span> : null}
            </span>
          </div>
          
          {!typing && (
            <div className="mt-4 text-white bg-gray-800 p-4 rounded border-l-4 border-purple-500 animate-fadeIn">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-purple-400">
                  {projects[currentProject].title}
                </h3>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {projects[currentProject].time}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {projects[currentProject].description}
              </p>
              
              <div className="mt-4">
                <div className="text-gray-400 mb-2">// Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-gray-700 text-purple-300 rounded border border-purple-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-4 text-white text-base">
            * Use arrow buttons to navigate between projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTerminal;