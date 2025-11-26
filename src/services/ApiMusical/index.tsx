import React from 'react'
import { View } from 'react-native'
import axios, { AxiosResponse } from "axios";

const ApiDeezer = axios.create({
  baseURL: 'https://api.deezer.com'
});

export interface Track {
  id: number;
  title: string;
  artist: {
    id: number;
    name: string;
    picture_medium: string;
  };
  album: {
    id: number;
    title: string;
    cover_medium: string;
  };
  preview: string; 
};

export interface AlbumDetails {
    id: number;
    title: string;
    cover_xl: string;
    artist: {
        id: number;
        name: string;
    };
    tracks: {
        data: Track[];
    };
}

export interface SearchResponse {
    data: Track[];
    total: number;
    next: string;
}

export const ApiMusical = {
  getAlbum: async (albumId: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/album/${albumId}`);  
  },
  
  getArtist: async (artistId: string): Promise<AxiosResponse> => {
    return ApiDeezer.get(`/artist/${artistId}`);  
  },

  getTrack: async (trackId: string): Promise<AxiosResponse<Track>> => {
    return ApiDeezer.get(`/track/${trackId}`);  
  },

  search: async (query: string): Promise<AxiosResponse<SearchResponse>> => {
    return ApiDeezer.get(`/search`, {
      params: { q: query }
    });  
  }
};

export default ApiMusical;
 
