import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useMusicContext } from "../../contexts/musicContext";
import { usePlayer } from "../../contexts/playerContext";

import { styles } from "./styles";

const Favoritos = () => {
  const { favoritosList, removeMusicaFavoritos } = useMusicContext();
  const { play, currentTrack, isPlaying } = usePlayer();

  const renderItem = ({ item, index }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.album?.cover_medium }} style={styles.image} />

      <View style={styles.infoArea}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist?.name}</Text>
      </View>

      <TouchableOpacity onPress={() => play(item, favoritosList, index)} style={styles.playBtn}>
        {currentTrack?.id === item.id && isPlaying ? (
          <Icon name="pause-circle" size={35} color="#1DB954" />
        ) : (
          <Icon name="play-circle-outline" size={35} color="#FFF" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeMusicaFavoritos(item.id)} style={styles.removeBtn}>
        <Icon name="heart-dislike-outline" size={26} color="#FF4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Favoritos</Text>

      {favoritosList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="heart-outline" size={70} color="#444" />
          <Text style={styles.emptyText}>Você ainda não tem favoritos.</Text>
        </View>
      ) : (
        <FlatList
          data={favoritosList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default Favoritos;