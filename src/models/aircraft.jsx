import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import airScene from '../../assets/3D/plane.glb';

const Aircraft = forwardRef(({ isRotating, ...props }, ref) => {
  const innerRef = useRef();
  const { scene, animations } = useGLTF(airScene);
  const { actions } = useAnimations(animations, innerRef);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [isRotating, actions]);

  useImperativeHandle(ref, () => ({
    setRotation: (rotation) => {
      if (innerRef.current) {
        innerRef.current.rotation.set(rotation.x, rotation.y, rotation.z);
      }
    },
  }));

  return (
    <mesh {...props} ref={innerRef}>
      <primitive object={scene} />
    </mesh>
  );
});

export default Aircraft;
