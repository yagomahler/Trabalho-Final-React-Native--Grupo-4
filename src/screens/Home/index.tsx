import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Animated, Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { HomePageNavigationProp } from '../../routes/navigators/StackNavigator';
import ApiMusical, { AlbumDetails } from '../../services/ApiMusical'; 
import { styles } from './styles';

interface AlbumCardData {
  img: string;
  albumId: number; 
  title: string;     
  artistName: string;  
}

export const Home: React.FC<{ navigation: HomePageNavigationProp }> = ({ navigation }) => {
  const [dadosCards, setDadosCards] = useState<{ img: string }[]>([]); 
  const [dadosAlbuns, setDadosAlbuns] = useState<AlbumCardData[]>([]);

  useEffect(() => {
    carregarArtistasAleatorios();
    carregarAlbunsAleatorios();
  }, []);

  const carregarArtistasAleatorios = async () => {
    try {
      const artistasIds = [
        "3054","66","17003","115","75798","3106","9052","639","3823","14046","406","35","447359",
        "56463732","13704","77066","1245","215594"
      ];
      const embaralhados = artistasIds.sort(() => Math.random() - 0.5);
      const selecionados = embaralhados.slice(0, 12);
      const requisicoes = selecionados.map(id => ApiMusical.getArtist(id));
      const respostas = await Promise.all(requisicoes);
      const imagens = respostas.map(res => ({
        img: res.data.picture_medium
      }));
      setDadosCards(imagens); 
    } catch (error) {
      console.log("Erro ao carregar artistas:", error);
    }
  };

  const carregarAlbunsAleatorios = async () => {
    try {
      const albumIds = [
        "302127", "115782", "375005", "116524", "8905331", "300302", "120300", 
        "102604472", "11388952", "131971702", "422005", "137041712", "135607562"
      ];
      const embaralhados = albumIds.sort(() => Math.random() - 0.5);
      const selecionados = embaralhados.slice(0, 12);
      const requisicoes = selecionados.map(id => ApiMusical.getAlbum(id));
      const respostas = await Promise.all(requisicoes);
      
      const albuns = respostas.map(res => {
        const data = res.data as AlbumDetails;
      
        const artistName = data.artist?.name || 'Artista Desconhecido';

        return {
          img: data.cover_medium,
          albumId: data.id, 
          title: data.title,         
          artistName: artistName 
        };
      });
      
      setDadosAlbuns(albuns); 
    } catch (error) {
      console.log("Erro ao carregar álbuns:", error);
    }
  };

  const navegarParaAlbum = (albumId: number) => {
    navigation.navigate('Album', { albumId: albumId.toString() });
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.perfil}>
        <Image source={{ uri: "" }} style={styles.perfilImagem} />
        <Text style={styles.perfilNome}>Nome</Text>
      </View>
      
     
      <Text style={styles.recomendados}>Artistas recomendados</Text>
      <View style={styles.cardsArtistas}>
        {dadosCards.map((item, index) => {
          const scale = new Animated.Value(1);
          const animar = () => {  
            Animated.sequence([
              Animated.timing(scale, { toValue: 0.9, duration: 100, useNativeDriver: true, }),
              Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true, })
            ]).start();
          };
          return (
            <TouchableWithoutFeedback key={index} onPress={animar}>
              <Animated.View style={[styles.cardBoxArtistas, { transform: [{ scale }] }]}>
                <Image source={{ uri: item.img }} style={styles.cardImg} />
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      
      <Text style={styles.recomendados}>Músicas recomendadas</Text>
      <View style={styles.cardsMusicas}>
        {dadosCards.map((item, index) => {
          const scale = new Animated.Value(1);
          const animar = () => { 
            Animated.sequence([
              Animated.timing(scale, { toValue: 0.9, duration: 100, useNativeDriver: true, }),
              Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true, })
            ]).start();
          };
          return (
            <TouchableWithoutFeedback key={index} onPress={animar}>
              <Animated.View style={[styles.cardBoxMusicas, { transform: [{ scale }] }]}>
                <Image source={{ uri: item.img }} style={styles.cardImgMusicas} />
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      
      <Text style={styles.recomendados}>Álbuns recomendados</Text>
      <View style={styles.cardsAlbuns}>
        {dadosAlbuns.map((item, index) => {
          const scale = new Animated.Value(1);
          
          const animarEPressionar = () => {
            Animated.sequence([
              Animated.timing(scale, { toValue: 0.9, duration: 100, useNativeDriver: true, }),
              Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true, })
            ]).start(() => {
                navegarParaAlbum(item.albumId); 
            });
          };

          return (
            <TouchableWithoutFeedback key={index} onPress={animarEPressionar}>
              <Animated.View style={[styles.cardBoxAlbuns, { transform: [{ scale }] }]}>
                <Image source={{ uri: item.img }} style={styles.cardImgAlbuns} />
                <Text style={styles.albumTitleText} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.artistNameText} numberOfLines={1}>{item.artistName}</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>

      <LinearGradient
        colors={['transparent', '#aa00a9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 6, y: 1 }}
        style={styles.gradient}
      />
    </ScrollView>
  );
};

export default Home;
