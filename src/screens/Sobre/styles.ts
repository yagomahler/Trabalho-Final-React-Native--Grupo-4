import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    zIndex: 2,
    marginTop: 35,
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
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: 2,
  },
});
