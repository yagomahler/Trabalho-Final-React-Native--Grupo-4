import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import ApiMusical, { AlbumDetails, Track } from "../../services/ApiMusical";
import styles from "./styles";

export default function ArtistaScreen({ route }: any) {
  const { artistId } = route.params;

  const [artist, setArtist] = useState<any>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [albums, setAlbums] = useState<AlbumDetails[]>([]);

  useEffect(() => {
  async function loadData() {
    try {
      const artistResponse = await ApiMusical.getArtist(artistId);
      const trackResponse = await ApiMusical.getArtistTopTracks(artistId);
      const albumResponse = await ApiMusical.getAlbum(artistId);

      setArtist(artistResponse.data);
      setTracks(trackResponse.data.data);
      setAlbums(albumResponse.data);
    
    } catch (error) {
      console.log("Erro ao buscar dados do artista: ", error);
    }
  }

    loadData();
  }, []);

  if (!artist) return <Text style={styles.loading}>Carregando...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      
      <Image source={{ uri: artist.picture_big }} style={styles.artistImage} />

      
      <Text style={styles.artistName}>{artist.name}</Text>

      
      <Text style={styles.sectionTitle}>Músicas mais ouvidas</Text>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.trackItem}>{item.title}</Text>
        )}
      />

      
      <Text style={styles.sectionTitle}>Discografia</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.albumCard}>
            <Image
              source={{ uri: item.cover_medium }}
              style={styles.albumCover}
            />
            <Text style={styles.albumTitle}>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}