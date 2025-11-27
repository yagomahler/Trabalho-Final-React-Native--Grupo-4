import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
  },

  loading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 18,
  },

  artistImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: "center",
  },

  artistName: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },

  sectionTitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  trackItem: {
    paddingVertical: 8,
    fontSize: 16,
  },

  albumCard: {
    marginRight: 15,
    width: 120,
  },

  albumCover: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },

  albumTitle: {
    marginTop: 6,
    fontSize: 14,
  },
});