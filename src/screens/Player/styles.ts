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
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    zIndex: 2,
  },
  trackTitle: {
    color: "#fff",
    fontSize: 400,
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: 2,
  },
});
