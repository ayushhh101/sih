import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Plant from '../components/Plant'
import '../Blendercomponentscss/Blender.css'
const Blender = () => {
  return (
    <>
     <div className="plant1">
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