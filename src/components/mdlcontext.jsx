import React, { createContext, useContext, useState } from 'react';

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const coordinates = [
    { y: 1.2, x: 0.6 },
    { y: 1.5, x: 5.4 },
    { y: 5.5, x: 6.0 },
    { y: 2.9, x: 0.1 },
    { y: 4.5, x: 0.8 },
  ];

  const handleKeyDown = (e) => {
    if (!isRotating) {
      if (e.key === 'ArrowRight' && currentIndex < coordinates.length - 1) {
        setIsRotating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setIsRotating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex === coordinates.length - 1) {
        setIsRotating(true);
        setCurrentIndex(0);
      } else if (e.key === 'ArrowLeft' && currentIndex === 0) {
        setIsRotating(true);
        setCurrentIndex(coordinates.length - 1);
      }
    }
  };

  const touchClick = (arg) => {
    if (!isRotating) {
      if (arg === 'ArrowRight' && currentIndex < coordinates.length - 1) {
        setIsRotating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (arg === 'ArrowLeft' && currentIndex > 0) {
        setIsRotating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else if (arg === 'ArrowRight' && currentIndex === coordinates.length - 1) {
        setIsRotating(true);
        setCurrentIndex(0);
      } else if (arg === 'ArrowLeft' && currentIndex === 0) {
        setIsRotating(true);
        setCurrentIndex(coordinates.length - 1);
      }
    }
  };

  return (
    <ModelContext.Provider value={{ isRotating, setIsRotating, currentStage, setCurrentStage, currentIndex, setCurrentIndex, handleKeyDown, touchClick }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModelContext = () => useContext(ModelContext);
