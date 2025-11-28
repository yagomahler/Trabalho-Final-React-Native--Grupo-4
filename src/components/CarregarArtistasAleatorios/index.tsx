import { useState, useCallback } from "react";
import ApiMusical from "../../services/ApiMusical";

export function useArtistasAleatorios() {
  const [dadosArtistas, setDadosArtistas] = useState([]);

  const carregarArtistasAleatorios = useCallback(async () => {
    try {
      const artistasIds = [
        "3054", "66", "17003", "115", "75798", "3106", "9052", "639", "3823",
        "14046", "406", "35", "447359", "936", "95768", "647", "719", "637",
        "8691", "3543", "339", "4244791", "816", "13544", "2118", "2127",
        "14687", "384236", "242123", "1125", "13", "14691", "98", "8710714",
        "158710", "169", "183716", "566", "8694", "14", "11388952", "52",
        "2183", "931", "6372", "533", "17283", "2124", "67", "1327", "75491",
        "2216", "15810", "245116", "2120", "92", "698", "505231", "414517",
        "5518450", "9708982", "119", "259", "1205", "415", "818061521", "89",
        "1319", "765829", "4724584", "412", "4488457", "113", "66479", "1725",
        "56463732", "13704", "77066", "1245", "215594"
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
  }, []);

  return { dadosArtistas, carregarArtistasAleatorios };
}