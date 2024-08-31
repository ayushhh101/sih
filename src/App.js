import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blender from './components/Blender';

function App() {
  return (
   <>
   <Grid/>
   <div>
   <Routes>
      <Route path="/blender" element={<Blender/>}/>
      </Routes>
   </div>
   </>
  );
}

export default App;
