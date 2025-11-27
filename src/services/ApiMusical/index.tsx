import React from 'react'
import { View } from 'react-native'
import axios, { AxiosResponse } from "axios";

const ApiDeezer = axios.create({
  baseURL: 'https://api.deezer.com'
});

export interface Artist {
  id: number;
  name: string;
  picture_medium: string;
}

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
  cover_medium: any;
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

export interface DeezerSearchResponse<T> {
  data: T[];
  total: number;
  next?: string;
}

export const ApiMusical = {

  getArtistTopTracks: async (artistId: string) => {
    return ApiDeezer.get(`/artist/${artistId}/top?limit=10`);
  },

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
  },

  searchTracks: (query: string): Promise<AxiosResponse<DeezerSearchResponse<Track>>> => {
        return ApiDeezer.get(`/search/track?q=${query}`);
    },

    searchAlbums: (query: string): Promise<AxiosResponse<DeezerSearchResponse<AlbumDetails>>> => {
        return ApiDeezer.get(`/search/album?q=${query}`);
    },

    searchArtists: (query: string): Promise<AxiosResponse<DeezerSearchResponse<Artist>>> => {
        return ApiDeezer.get(`/search/artist?q=${query}`);
    }
};

export default ApiMusical;