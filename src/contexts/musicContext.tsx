import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Track } from '../services/ApiMusical';

interface ContextProps {
  children: React.ReactNode
}

interface MusicContextProviderProps {
  favoritosList: Track[],
  addMusicaFavoritos: (item: Track) => void,
  removeMusicaFavoritos: (id: number) => void,

}

export const MusicContext = createContext<MusicContextProviderProps>({
  favoritosList: [],
  addMusicaFavoritos: () => { },
  removeMusicaFavoritos: () => { }
});

export const MusicProvider = ({ children }: ContextProps) => {
  const [favoritosList, setFavoritosList] = useState<Track[]>([]);

  useEffect(() => {
    monteListaFavoritos()
  }, []);


 async function monteListaFavoritos() {
    try {
      let favoritoList = await getData();
      setFavoritosList(favoritoList); 
    } catch {
      setFavoritosList([]);
    }
  };

  function addMusicaFavoritos(item: Track) {
    setFavoritosList(oldList => {
      let newList = [...oldList, item];

      storeData(newList)

      return newList;
    })

  };

  function removeMusicaFavoritos(id: number) {
    setFavoritosList(oldList => {
      let newList = oldList.filter(item => item.id !== id);

      storeData(newList);

      return newList;

    });
  };

  const storeData = async (value: Track[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorito-list', jsonValue)
    } catch (e) {

    }

  };

  async function getData(): Promise<Track[]> {
    try {
      const jsonValue = await AsyncStorage.getItem('favorito-list');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      return []
    }
  };

  return <MusicContext.Provider
    value={{ favoritosList, addMusicaFavoritos, removeMusicaFavoritos }}>
    {children}
  </MusicContext.Provider>

}

export const useMusicContext = () => useContext(MusicContext);