import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Model } from '../models/island';
import Sky from '../models/sky';
import Aircraft from '../models/aircraft';
import Popup from '../components/Popup';
import { ModelProvider, useModelContext } from '../components/mdlcontext';

const Home = () => {
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
            screenScale = [1.25, 1.25, 1.25];
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
            <div className='absolute top-16 left-0 right-0 z-10 flex items-center justify-center gap-3'>
                {currentStage && <div className='arw'><img src='/assets/icons/left.png' alt='left' onClick={() => touchClick("ArrowLeft")} /></div>}
                {currentStage && <Popup currentStage={currentStage} setCurrentStage={setCurrentStage} />}
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

const HomeWithModelProvider = () => (
    <ModelProvider>
        <Home />
    </ModelProvider>
);

export default HomeWithModelProvider;
