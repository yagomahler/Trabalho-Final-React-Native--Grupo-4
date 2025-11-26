import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    marginTop: 35,
    justifyContent: "center",
    zIndex: 2,
  },

  avatarContainer: {
    marginBottom: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    // borderColor: "#000",
    boxShadow: "1px 1px 1px 1px #750375ff",
    zIndex: 2,
  },

  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#333333",
    borderRadius: 25,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    marginBottom: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    borderColor: "#000",
    // boxShadow: "1px 1px 1px 1px #750375ff",
    zIndex: 2,
  },
  button: {
    width: "85%",
    height: 50,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    zIndex: 2,
  },
  buttonText: {
    color: "#1C1C1C",
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 2,
  },

  linkText: {
    color: "#AAAAAA",
    fontSize: 14,
    marginTop: 10,
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

export default styles;
