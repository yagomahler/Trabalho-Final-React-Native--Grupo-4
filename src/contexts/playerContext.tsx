import React, { createContext, useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";

type Track = any;    
type Playlist = Track[];

interface PlayerContextProps {
  currentTrack: Track | null;
  playlist: Playlist | null;
  index: number;
  isPlaying: boolean;
  play: (track: Track, playlist?: Playlist, index?: number) => Promise<void>;
  pause: () => Promise<void>;
  next: () => Promise<void>;
  prev: () => Promise<void>;
}

const PlayerContext = createContext<PlayerContextProps>({} as PlayerContextProps);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

 
  const play = async (
    track: Track,
    newPlaylist?: Playlist,
    newIndex?: number
  ) => {
    try {
      
      if (!track?.preview) return;

  
      if (newPlaylist) setPlaylist(newPlaylist);
      if (typeof newIndex === "number") setIndex(newIndex);

   
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
      }

      
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: track.preview },
        { shouldPlay: true }
      );

      setSound(newSound);

      setCurrentTrack(track);

      setIsPlaying(true);
    } catch (err) {
      console.log("Erro no play:", err);
    }
  };

  const pause = async () => {
    if (!sound) return;
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  const next = async () => {
    if (!playlist) return;
    const nextIndex = index + 1;
    if (nextIndex >= playlist.length) return;

    const nextTrack = playlist[nextIndex];

    await play(nextTrack, playlist, nextIndex);
  };

  
  const prev = async () => {
    if (!playlist) return;
    const prevIndex = index - 1;
    if (prevIndex < 0) return;

    const prevTrack = playlist[prevIndex];
    await play(prevTrack, playlist, prevIndex);
  };


  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync();
    };
  }, [sound]);

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        playlist,
        index,
        isPlaying,
        play,
        pause,
        next,
        prev,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  return useContext(PlayerContext);
}
