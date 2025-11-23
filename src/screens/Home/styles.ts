import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    zIndex: 2,
  },
  perfil: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    zIndex: 2,
  },
  perfilImagem: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: "#aa00a9",
    borderWidth: 1,
    zIndex: 2,
  },
  perfilNome: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
    zIndex: 2,
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
    zIndex: 2,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 2,
  },
  cardBox: {
    borderWidth: 2,
    borderColor: "#aa00a9",
    margin: 5,
    borderRadius: 30,
    zIndex: 2,
  },
  cardImg: {
    width: 110,
    height: 110,
    borderRadius: 30,
    zIndex: 2,
  },
  gradient: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "150%",
    height: "150%",
  },
});
