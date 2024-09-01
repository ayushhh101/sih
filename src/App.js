import { Suspense } from 'react';
import './App.css';
import Grid from './components/Grid';
import { Route, Routes } from 'react-router-dom';
import Blender from './components/Blender';
import Navbar from './components/Navbar';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Plant1 from './Plant1'

function App() {
  return (
   <>
   <Navbar/>
   <div>
   <Routes>
      <Route path="/grid" element={<Grid/>}/>
      <Route path="/blender" element={<Blender/>}/>
      </Routes>
   </div>
  
   </>
  );
}

export default App;
