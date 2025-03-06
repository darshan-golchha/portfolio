import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Model } from '../models/island';
import Sky from '../models/sky';
import Aircraft from '../models/aircraft';
import Popup from '../components/Popup';
import { ModelProvider, useModelContext } from '../components/mdlcontext';
import ProjectsTerminal from '../components/projectsterminal';

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
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Darshan Golchha
                        </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
                </div>
                <div className="group relative">
                    <p className="text-xl text-gray-800 transition-all duration-300 hover:translate-x-2">
                        A dedicated{' '}
                        <span className="font-semibold text-purple-600">software developer</span>
                        {' '}and{' '}
                        <span className="font-semibold text-blue-500">data scientist</span>
                    </p>
                </div>
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
    // Project data that will be passed to the ProjectsTerminal component
    const projectsData = [
        { 
            title: "Custom Linux Shell", 
            description: "A custom Unix shell implementation in C that supports command execution, piping, variable substitution, and command substitution, providing deep insights into process management and inter-process communication in operating systems.", 
            tech: "C, Linux, Shell", 
            time: "March 2025",
            command: "show project --name 'Custom Linux Shell'"
        },
        {
            title: "AnajBazaar",
            description: "A platform for managing and selling products through the Admin Panel, allowing them to oversee inventory, orders, and users through the Mobile App to place orders, providing a seamless shopping experience.",
            tech: "ReactNative, React, SpringBoot, Java, MongoDB, JWT, TailwindCSS",
            time: "February 2025",
            command: "show project --name 'AnajBazaar'"
        },
        {
            title: "Forefarm",
            description: "A web app that helps farmers predict extreme weather impacts using machine learning and interactive farmland mapping.",
            tech: "Python, Flask, MongoDB, React, Mapbox, Auth0, Machine Learning, Random Forest",
            time: "November 2024",
            command: "show project --name 'Forefarm'"
        },
        {
            title: "Super Tic Tac Toe",
            description: "A more complex version of the classic Tic Tac Toe game, requiring strategic thinking and planning.",
            tech: "React, Flask, Python, JavaScript, Game Theory, Minimax, Alpha-Beta Pruning",
            time: "October 2024",
            command: "show project --name 'Super Tic Tac Toe'"
        },
    ];

    return (
        <div className="min-h-screen bg-white mt-0">
            <div className="fixed top-16 right-3 z-10 flex justify-between items-center p-4 bg-transparent">
                <div className="relative flex items-center justify-center">
                    <span className="absolute -top-8 left-4 text-xs bg-blue-500 text-white rounded-full px-2 py-1 shadow-md animate-bounce">
                        3D
                    </span>
                </div>
                <ToggleButton togglePlay={togglePlay} setTogglePlay={setTogglePlay} />
            </div>
            <main className="max-w-6xl mx-auto p-8">
                <IntroSection />
                
                {/* Pass the projects data to the ProjectsTerminal component */}
                <ProjectsTerminal projects={projectsData} />
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