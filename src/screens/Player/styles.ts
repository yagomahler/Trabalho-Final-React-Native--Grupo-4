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
    marginTop: 150,
    zIndex: 2,
  },
  trackTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    // marginLeft: 40,
    marginBottom: 10,
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center", 
    zIndex: 2,
  },
  trackImage: {
    borderColor: "#aa00a9",
    borderWidth: 1,
    width: 322, 
    height: 322, 
    alignSelf: "center", 
    marginTop: 30,
    zIndex: 2,
  },
});
