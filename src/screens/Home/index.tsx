import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Animated, Image, ScrollView, Text, TouchableWithoutFeedback, View, } from "react-native";
import { usePlayer } from "../../contexts/playerContext";
import { HomePageNavigationProp } from "../../routes/navigators/StackNavigator";
import ApiMusical, { AlbumDetails } from "../../services/ApiMusical";
import { styles } from "./styles";
import GradientBackground from "../../components/GradientBackground";

interface AlbumCardData {
  img: string;
  albumId: number;
  title: string;
  artistName: string;
}
interface ArtistaCardData {
  img: string;
  artistId: string;
}
interface MusicCardData {
  img: string;
  title: string;
  artistName: string;
  preview: string;
  id: string
}

export const Home: React.FC<{ navigation: HomePageNavigationProp }> = ({
  navigation,
}) => {
  const { play } = usePlayer();
  const [dadosCards, setDadosCards] = useState<{ img: string }[]>([]);
  const [dadosAlbuns, setDadosAlbuns] = useState<AlbumCardData[]>([]);
  const [dadosMusicas, setDadosMusicas] = useState<MusicCardData[]>([]);
  const [dadosArtistas, setDadosArtistas] = useState<ArtistaCardData[]>([]);
  useEffect(() => {
    carregarArtistasAleatorios();
    carregarAlbunsAleatorios();
    carregarMusicasAleatorias();
  }, []);
  const carregarArtistasAleatorios = async () => {
    try {
      const artistasIds = [
        "3054",
        "66",
        "17003",
        "115",
        "75798",
        "3106",
        "9052",
        "639",
        "3823",
        "14046",
        "406",
        "35",
        "447359",
        "936",
        "95768",
        "647",
        "719",
        "637",
        "8691",
        "3543",
        "339",
        "4244791",
        "816",
        "13544",
        "2118",
        "2127",
        "14687",
        "384236",
        "242123",
        "1125",
        "13",
        "14691",
        "98",
        "8710714",
        "158710",
        "169",
        "183716",
        "566",
        "8694",
        "14",
        "11388952",
        "52",
        "2183",
        "931",
        "6372",
        "533",
        "17283",
        "2124",
        "67",
        "1327",
        "75491",
        "2216",
        "15810",
        "245116",
        "2120",
        "92",
        "698",
        "505231",
        "414517",
        "5518450",
        "9708982",
        "119",
        "259",
        "1205",
        "415",
        "818061521",
        "89",
        "1319",
        "765829",
        "4724584",
        "412",
        "4488457",
        "113",
        "66479",
        "1725",
        "56463732",
        "13704",
        "77066",
        "1245",
        "215594",
      ];
    const embaralhados = artistasIds.sort(() => Math.random() - 0.5);
    const selecionados = embaralhados.slice(0, 12);
    const requisicoes = selecionados.map((id) => ApiMusical.getArtist(id));
    const respostas = await Promise.all(requisicoes);
    const artistas = respostas.map((res) => ({
      img: res.data.picture_medium,
      artistId: res.data.id.toString(),
    }));
    setDadosArtistas(artistas);
  } catch (error) {
    console.log("Erro ao carregar artistas:", error);
  }
};
  const carregarAlbunsAleatorios = async () => {
    try {
      const albumIds = [
        "9410100",
        "9410086",
        "9410096",
        "192713912",
        "273425942",
        "192713382",
        "65728092",
        "217795",
        "6872781",
        "620594",
        "92441",
        "91973",
        "1339808",
        "426206047",
        "6637634",
        "262689412",
        "54853512",
        "1454128",
        "1382877",
        "262577432",
        "262578012",
        "978395",
        "433252",
        "431105",
        "430543",
        "164392742",
        "127270232",
        "1219432",
        "8015598",
        "845711302",
        "318323957",
        "67112162",
        "4502741",
        "697730",
        "78721",
        "944848",
        "50537252",
        "14713400",
        "92118",
        "338903",
        "303391",
        "251184952",
        "301190",
        "11102328",
        "252650682",
        "98711",
        "5287781",
        "5424121",
        "8322886",
        "6010349",
        "5956692",
        "266772012",
        "14344084",
        "253927",
        "334252",
        "334249",
        "334244",
        "334342",
        "334196",
        "334191",
        "334284",
        "334285",
        "664052151",
        "583192942",
        "41645391",
        "53098502",
        "9920344",
        "9784060",
        "9789862",
        "10966122",
        "51001312",
        "7776833",
        "1441212",
        "5814031",
        "68614721",
        "6916355",
        "1262014",
        "179304232",
        "7019471",
        "72123",
        "708674",
        "10595425",
        "10588255",
        "10748338",
        "6551689",
        "39555481",
        "8980335",
        "11747504",
        "15151267",
        "7515539",
        "15151447",
        "15151449",
        "14379438",
        "382650",
        "89752",
        "309640",
        "309600",
        "309599",
        "145197592",
        "97430",
        "1344559",
      ];
      const embaralhados = albumIds.sort(() => Math.random() - 0.5);
      const selecionados = embaralhados.slice(0, 12);
      const requisicoes = selecionados.map((id) => ApiMusical.getAlbum(id));
      const respostas = await Promise.all(requisicoes);
      const albuns = respostas.map((res) => {
        const data = res.data as AlbumDetails;
        const artistName = data.artist?.name || "Artista Desconhecido";
        return {
          img: data.cover_medium,
          albumId: data.id,
          title: data.title,
          artistName: artistName,
        };
      });
      setDadosAlbuns(albuns);
    } catch (error) {
      console.log("Erro ao carregar álbuns:", error);
    }
  };
  const carregarMusicasAleatorias = async () => {
    try {
      const musicIds = ["2755530","598083842","10274043","528972091","127372473","3078853101",
        "1126127102","6715839","14630182","6278220","606018","375242151","4685337","4685335",
        "69862884","134946510","143060452","530300641","2293791","538586982","577487242",
        "3412841","3412515","366076821","1509538522","1559717","106297606","142986206",
        "129231820",
      ];
      const embaralhados = musicIds.sort(() => Math.random() - 0.5);
      const selecionados = embaralhados.slice(0, 8);
      const requisicoes = selecionados.map((id) => ApiMusical.getTrack(id));
      const respostas = await Promise.all(requisicoes);
      const musicas = respostas.map((res) => ({
        img: res.data.album.cover_medium,
        title: res.data.title,
        artistName: res.data.artist.name,
        preview: res.data.preview,
        id: res.data.id.toString(),
      }));
      setDadosMusicas(musicas);
    } catch (error) {
      console.log("Erro ao carregar músicas:", error);
    }
  };
  const navegarParaArtista = (artistId: string) => {
    navigation.navigate('Artista', { artistId });
  };
  const navegarParaMusica = (musica: MusicCardData) => {
    play({
      id: musica.id ?? 0,
      title: musica.title,
      artist: { name: musica.artistName },
      album: { cover_medium: musica.img },
      preview: musica.preview,
    });
    navigation.navigate("Player", { id: "Hello world" });
  };
  const navegarParaAlbum = (albumId: number) => {
    navigation.navigate("Album", { albumId: albumId.toString() });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.perfil}>
        <Image source={{ uri: "" }} style={styles.perfilImagem} />
        <Text style={styles.perfilNome}>Nome</Text>
      </View>
      <Text style={styles.recomendados}>Artistas recomendados</Text>
      <View style={styles.cardsArtistas}>
        {dadosArtistas.map((item, index) => {
          const scale = new Animated.Value(1);
          const animar = () => {
            Animated.sequence([
              Animated.timing(scale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              }),
            ]).start(() => {
              navegarParaArtista(item.artistId);
            });
          };
          return (
            <TouchableWithoutFeedback key={index} onPress={animar}>
              <Animated.View
                style={[styles.cardBoxArtistas, { transform: [{ scale }] }]}
              >
                <Image source={{ uri: item.img }} style={styles.cardImg} />
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <Text style={styles.recomendados}>Músicas recomendadas</Text>
      <View style={styles.cardsMusicas}>
        {dadosMusicas.map((item, index) => {
          const scale = new Animated.Value(1);
          const animarEPressionar = () => {
            Animated.sequence([
              Animated.timing(scale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              }),
            ]).start(() => {
              navegarParaMusica(item);
            });
          };
          return (
            <TouchableWithoutFeedback key={index} onPress={animarEPressionar}>
              <Animated.View
                style={[styles.cardBoxMusicas, { transform: [{ scale }] }]}
              >
                <Image
                  source={{ uri: item.img }}
                  style={styles.cardImgMusicas}
                />
                <Text style={styles.musicTitleText} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.musicArtistText} numberOfLines={1}>
                  {item.artistName}
                </Text>
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
              Animated.timing(scale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              }),
            ]).start(() => {
              navegarParaAlbum(item.albumId);
            });
          };
          return (
            <TouchableWithoutFeedback key={index} onPress={animarEPressionar}>
              <Animated.View
                style={[styles.cardBoxAlbuns, { transform: [{ scale }] }]}
              >
                <Image
                  source={{ uri: item.img }}
                  style={styles.cardImgAlbuns}
                />
                <Text style={styles.albumTitleText} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.artistNameText} numberOfLines={1}>
                  {item.artistName}
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <GradientBackground/>
    </ScrollView>
  );
};

export default Home;