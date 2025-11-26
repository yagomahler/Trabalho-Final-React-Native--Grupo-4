import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Parametros } from '../../routes/navigators/StackNavigator'
import { ApiMusical, AlbumDetails, Track } from '../../services/ApiMusical';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useMusicContext } from '../../contexts/musicContext';
import { usePlayer } from '../../contexts/playerContext';

import {styles} from './styles';

type AlbumScreenRouteProp = RouteProp<Parametros, 'Album'>;
type AlbumScreenNavigationProp = StackNavigationProp<Parametros, 'Album'>;

interface Props {
  route: AlbumScreenRouteProp;
  navigation: AlbumScreenNavigationProp;
}

const Album = ({ route }: Props) => {
  const { albumId } = route.params;
  const { addMusicaFavoritos, removeMusicaFavoritos, favoritosList } = useMusicContext();
  const { play, currentTrack, isPlaying } = usePlayer();
  const [albumDetails, setAlbumDetails] = useState<AlbumDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAlbumDetails();
  }, []);

  const fetchAlbumDetails = async () => {
    try {
      setLoading(true);
  
      const response = await ApiMusical.getAlbum(albumId as string); 
      setAlbumDetails(response.data as AlbumDetails);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os detalhes do álbum.");
      setLoading(false);
    }
  };

  const isFavorite = (trackId: number) => {
    return favoritosList.some(item => item.id === trackId);
  };

  const toggleFavorite = (track: Track) => {
    if (isFavorite(track.id)) {
      removeMusicaFavoritos(track.id);
    } else {
      addMusicaFavoritos(track);
    }
  };

  const handlePlayTrack = async (track: Track, index: number) => {
    if (!albumDetails?.tracks.data) return;
    
    await play(track, albumDetails.tracks.data, index);
  };

  const renderTrackItem = ({ item, index }: { item: Track, index: number }) => (
    <View style={styles.trackItem}>
      <Text style={styles.trackNumber}>{index + 1}.</Text>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.artist.name}</Text>
      </View>
      <TouchableOpacity onPress={() => handlePlayTrack(item, index)} style={styles.playButton}>
        {currentTrack?.id === item.id && isPlaying ? (
            <Icon name="pause-circle-outline" size={30} color="#1DB954" />
        ) : (
            <Icon name="play-circle-outline" size={30} color="#FFF" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.favoriteButton}>
        <Icon 
          name={isFavorite(item.id) ? "heart" : "heart-outline"} 
          size={24} 
          color={isFavorite(item.id) ? "#1DB954" : "#FFF"} 
        />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  if (error || !albumDetails) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: albumDetails.cover_xl }} style={styles.coverImage} />
        <Text style={styles.albumTitle}>{albumDetails.title}</Text>
        <Text style={styles.artistName}>{albumDetails.artist.name}</Text>
      </View>

      <FlatList
        data={albumDetails.tracks.data}
        renderItem={renderTrackItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};


export default Album;
