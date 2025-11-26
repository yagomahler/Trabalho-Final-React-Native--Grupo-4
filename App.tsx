import React from 'react'
import { Routes } from "./src/routes";
import { MusicProvider } from './src/contexts/musicContext';
import { UserProvider } from './src/contexts/userContext';

export const App = () => {
  return (
    <UserProvider>
      <MusicProvider>
        <Routes />
      </MusicProvider>
    </UserProvider>
  )
}

export default App;