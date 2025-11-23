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
        "3054","66","17003","115","75798","3106","9052","639","3823","14046","406","35","447359",
        "936","95768","647","719","637","8691","3543","339","4244791","816","13544","2118","2127",
        "14687","384236","242123","1125","13","14691","98","8710714","158710","169","183716","566",
        "8694","14","11388952","52","2183","931","6372","533","17283","2124","67","1327","75491",
        "2216","15810","245116","2120","92","698","505231","414517","5518450","9708982","119","259",
        "1205","415","818061521","89","1319","765829","4724584","412","4488457","113","66479","1725",
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
  }
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
