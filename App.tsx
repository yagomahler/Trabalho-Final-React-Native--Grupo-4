import React from 'react'
import { Routes } from "./src/routes";
import { MusicProvider } from './src/contexts/musicContext';

export const App = () => {
  return <MusicProvider>
    <Routes/> 
  </MusicProvider>
  
}

export default App;