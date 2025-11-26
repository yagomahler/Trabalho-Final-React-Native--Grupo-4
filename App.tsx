import React from 'react'
import { Routes } from "./src/routes";
import { MusicProvider } from './src/contexts/musicContext';
import { UserProvider } from './src/contexts/userContext';
import { PlayerProvider } from './src/contexts/playerContext';

export const App = () => {
  return (
    <UserProvider>
      <MusicProvider>
        <PlayerProvider>
          <Routes />
        </PlayerProvider>
      </MusicProvider>
    </UserProvider>
  )
}

export default App;