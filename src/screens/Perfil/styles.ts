import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({    
    container: {
        flex: 1, 
        backgroundColor: '#1E1E1E', 
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center', 
    },


    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60, 
        backgroundColor: '#3A3A3A', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
        borderWidth: 3,
        borderColor: '#007AFF', 
    },

    linkText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
        paddingVertical: 15,
        width: '100%', 
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#3A3A3A',
    },
    
    touchableArea: {
        width: '100%',
        paddingHorizontal: 10,
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

});
export default styles;