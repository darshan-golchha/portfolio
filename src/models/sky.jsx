import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import skyScene from '../../assets/3D/sky.glb';

const Sky = forwardRef(({ isRotating, moving }, ref) => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useImperativeHandle(ref, () => ({
    setRotation: (rotation) => {
      if (skyRef.current) {
        // Apply the inverse rotation
        skyRef.current.rotation.set(-rotation.x, -rotation.y, -rotation.z);
      }
    },
  }));

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
});

export default Sky;
