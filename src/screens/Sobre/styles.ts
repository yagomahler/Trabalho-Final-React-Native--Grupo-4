import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    zIndex: 2,
    marginTop: 35,
    paddingHorizontal: 20,
  },
  gradient: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "150%",
    height: "150%",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginTop: 100,
    fontWeight: "bold",
    alignSelf: "center",
    zIndex: 2,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 12,
    zIndex: 2,
  },
  bold: {
    fontWeight: "bold",
    color: "#fff",
  },
});