import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Model } from '../models/island';
import Sky from '../models/sky';
import Aircraft from '../models/aircraft';
import Popup from '../components/Popup';
import { ModelProvider, useModelContext } from '../components/mdlcontext';
import { Github, Linkedin, Mail, Music, BookOpen, Code, Trophy } from 'lucide-react';
import SkillTags from '../components/projectskills';

const Home = ({ togglePlay, setTogglePlay }) => {
    const [moving, setMoving] = useState(false);
    const aircraftRef = useRef();
    const skyRef = useRef();
    const { isRotating, setIsRotating, currentStage, setCurrentStage, touchClick } = useModelContext();


    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, 0, -300];
        let rotation = [1.5, 0.5, 2.4];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    };
    const [scale, position, rotation] = adjustIslandForScreenSize();

    const adjustPlaneForScreenSize = () => {
        let screenScale = null;
        let screenPosition = null;
        let rotation = [0, 1.2, 0.3];
        if (window.innerWidth < 768) {
            screenScale = [-0.8, 0.8, 0.8];
            screenPosition = [0, 0, 0];
        } else {
            screenScale = [-1, 1, 1];
            screenPosition = [0, 0, 0];
        }
        return [screenScale, screenPosition, rotation];
    };
    const [plscale, plposition, plrotation] = adjustPlaneForScreenSize();

    return (
        <section className='w-full h-screen relative bg-black-500'>
            <div className="absolute top-20 right-3 z-10 flex flex-col items-center gap-3">
                <ToggleButton togglePlay={togglePlay} setTogglePlay={setTogglePlay} />
            </div>

            <div className='absolute top-32 left-0 right-0 z-10 flex flex-col items-center justify-center gap-3'>
                {currentStage && <Popup currentStage={currentStage} setCurrentStage={setCurrentStage} />}
            </div>
            <div className='absolute top-[85%] left-[32%] right-[30%]  z-10 flex items-center justify-center gap-3'>
                {currentStage && <div className='arw'><img src='/assets/icons/left.png' alt='left' onClick={() => touchClick("ArrowLeft")} /></div>}
                {currentStage && <div className='arw'><img src='/assets/icons/right.png' alt='right' onClick={() => touchClick("ArrowRight")} /></div>}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} intensity={3} />
                    <directionalLight position={[-10, -10, 5]} intensity={0.4} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#f0f0f0' intensity={0.4} />
                    <Aircraft position={plposition} scale={plscale} rotation={plrotation}
                        isRotating={isRotating} ref={aircraftRef}
                    />
                    <Sky isRotating={isRotating} moving={moving} ref={skyRef} />
                    <Model position={position} scale={scale} rotation={rotation}
                        isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}
                        moving={moving} setMoving={setMoving} currentStage={currentStage} aircraftRef={aircraftRef}
                        skyRef={skyRef}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

const ToggleButton = ({ togglePlay, setTogglePlay }) => {
    return (
        <div className="flex items-center">
            <input type="checkbox" id="toggle" className="hidden" checked={togglePlay} onChange={() => setTogglePlay(!togglePlay)} />
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <div className={`block w-14 h-8 rounded-full ${togglePlay ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition ${togglePlay ? 'transform translate-x-full' : ''}`}></div>
                </div>
            </label>
        </div>
    );
};
const IntroSection = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section className="py-16 px-4">
            <div className={`max-w-4xl mx-auto space-y-8 transform transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Name and Title with gradient */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Darshan Golchha
                        </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
                </div>

                {/* Role description with hover effect */}
                <div className="group relative">
                    <p className="text-xl text-gray-800 transition-all duration-300 hover:translate-x-2">
                        A dedicated{' '}
                        <span className="font-semibold text-purple-600">software developer</span>
                        {' '}and{' '}
                        <span className="font-semibold text-blue-500">data scientist</span>
                    </p>
                </div>

                {/* Education with scale effect */}
                <div className="group bg-gray-50 p-4 rounded-lg transition-transform duration-300 hover:scale-105">
                    <p className="text-lg text-gray-700">
                        Currently pursuing my Bachelor's degree in{' '}
                        <span className="font-medium">Computer Science</span>
                        {' '}and{' '}
                        <span className="font-medium">Data Science</span>
                        {' '}at{' '}
                        <span className="font-medium text-purple-600">UW Madison</span>
                    </p>
                </div>

                {/* Welcome message with bounce animation */}
                <div className="relative">
                    <p className="text-lg text-gray-600 animate-pulse">
                        You've stumbled upon my portfolio —{' '}
                        <span className="text-purple-600 font-medium inline-block hover:animate-bounce">
                            feel free to explore!
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

const Portfolio = ({ togglePlay, setTogglePlay }) => {

    const projects = [
        {
            title: "Forefarm",
            description: "A web app that helps farmers predict extreme weather impacts using machine learning and interactive farmland mapping.",
            tech: "Python, Flask, MongoDB, React, Mapbox, Auth0, Machine Learning, Random Forest"
        },
        {
            title: "Super Tic Tac Toe",
            description: "A more complex version of the classic Tic Tac Toe game, requiring strategic thinking and planning.",
            // 'React', 'Flask', 'Python', 'JavaScript', 'Game Theory', 'Minimax', 'Alpha-Beta Pruning', 'Frontend Development', 'Backend Development'
            tech: "React, Flask, Python, JavaScript, Game Theory, Minimax, Alpha-Beta Pruning",
        },
        {
            title: "Spyfall",
            description: "The game involves players guessing the spy among them based on limited information, promoting critical thinking and social interaction.",
            tech: "React, JavaScript, HTML, CSS",
        }
    ];

    return (
        <div className="min-h-screen bg-white mt-16">
            <div className="fixed top-16 right-3 z-10 flex justify-between items-center p-4 bg-transparent">
                {/* Writing animated text as an indicator to see the toggle button */}
                <div className="relative flex items-center justify-center">
                    <span className="absolute -top-8 left-4 text-xs bg-blue-500 text-white rounded-full px-2 py-1 shadow-md animate-bounce">
                        3D
                    </span>
                </div>
                <ToggleButton togglePlay={togglePlay} setTogglePlay={setTogglePlay} />
            </div>
            <main className="max-w-6xl mx-auto p-8">
                {/* Brief Intro Section: " Hi, I'm Darshan Golchha, a dedicated software developer and data scientist. 
                I'm currently pursuing my Bachelor's degree in Computer Science and Data Science at UW Madison. 
                You've stumbled upon my portfolio, where I showcase my projects and skills. Feel free to explore!" */}
                <IntroSection />
                {/* Projects Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-2">Recent Projects</h2>
                    <p className="text-slate-500 mb-8">To see my top projects, visit my projects page.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="p-6 border-b-[12px] border-purple-600 bg-white rounded-lg shadow-sm">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <SkillTags skills={project.tech.split(', ')} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

const HomeWithModelProvider = () => {
    const [togglePlay, setTogglePlay] = useState(false);

    return (
        <>
            {togglePlay ? (
                <ModelProvider>
                    <Home togglePlay={togglePlay} setTogglePlay={setTogglePlay} />
                </ModelProvider>
            ) : (
                <Portfolio togglePlay={togglePlay} setTogglePlay={setTogglePlay} />
            )}
        </>
    );
};

export default HomeWithModelProvider;
