import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Plant from './Plant'
const Blender = () => {
  return (
    <>
     <div style={{ width: '500px', height: '500px' ,marginTop: '20px' }}>
      <Canvas>
        <Environment preset='forest'/>
        <OrbitControls/>
        <Plant/>
      </Canvas>
      </div>
    </>
  )
}

export default Blender