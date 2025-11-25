import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface ContextProps {
  children: React.ReactNode
}

interface MusicContextProviderProps {
  favoritosList: ,
  addMusicaFavoritos: ,
  removeMusicaFavoritos: (index: string) => void,

}

export const MusicContext = createContext<MusicContextProviderProps>({
  favoritosList: [],
  addMusicaFavoritos: () => { },
  removeMusicaFavoritos: () => { }
});

export const MusicProvider = ({ children }: ContextProps) => {
  const [favoritosList, setFavoritosList] = useState<[]>([]);

  useEffect(() => {
    monteListaFavoritos()
  }, []);


  async function monteListaFavoritos() {

    try {
      let favoritoList = await getData();
    } catch {
      setFavoritosList([]);
    }

  };

  function addMusicaFavoritos(item:  ) {
    setFavoritosList(oldList => {
      let newList = [...oldList, item];

      storeData(newList)

      return newList;
    })

  };

  function removeMusicaFavoritos(index: string) {
    setFavoritosList(oldList => {
      let newList = oldList.filter(item => item.index !== index);

      storeData(newList);

      return newList;

    });
  };

  const storeData = async (value: ) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorito-list', jsonValue)
    } catch (e) {

    }

  };

  async function getData(): Promise<[]> {
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