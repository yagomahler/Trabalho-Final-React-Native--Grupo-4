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
    }
});
export default styles;