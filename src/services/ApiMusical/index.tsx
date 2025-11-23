import React from 'react'
import { View } from 'react-native'
import axios, { AxiosResponse } from "axios";

const ApiDeezer = axios.create({
  baseURL: 'https://api.deezer.com'
});

export const ApiMusical = {
  getAlbum: async (albumId: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/album/${albumId}`);  
  },
  
  getArtist: async (artistId: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/artist/${artistId}`);  
  },

  getTrack: async (trackId: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/track/${trackId}`);  
  },

  search: async (query: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/search`, {
      params: { q: query }
    });  
  }
};

export default ApiMusical;
 
