import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { HomePageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';
import ApiMusical from '../../services/ApiMusical';
import { LinearGradient } from 'expo-linear-gradient';
export const Home: React.FC<{ navigation: HomePageNavigationProp }> = ({ navigation }) => {

  const [dadosCards, setDadosCards] = useState<{ img: string }[]>([]);

  useEffect(() => {
    carregarArtistasAleatorios();
  }, []);

  const carregarArtistasAleatorios = async () => {
    try {
      // Lista grande de artistas da API do Deezer (IDs reais, variados)
      const artistasIds = [
        "27","412","13","246791","4050205","384236","560","144227","582","90800","10583405", 
        "9635624","171626","2738","1","2","3","4","5","6"
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
  return (
    <ScrollView style={styles.container}>
      <View style={styles.perfil}>
        <Image
          source={{ uri: "" }}
          style={styles.perfilImagem}
        />
        <Text style={styles.perfilNome}>Nome</Text>
      </View>
      <Text style={styles.titulo}>Recomendados</Text>
      <View style={styles.cards}>
        {dadosCards.map((item, index) => (
          <View key={index} style={styles.cardBox}>
            <Image source={{ uri: item.img }} style={styles.cardImg} />
          </View>
        ))}
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
