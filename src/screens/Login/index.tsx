import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react'; 
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './style';
import { fetchAllUsuarios, Usuario } from '../../services/MockApi'; 


export const Login: React.FC<{ navigation: LoginPageNavigationProp }> = ({ navigation }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [usuariosList, setUsuariosList] = useState<Usuario[]>([]);

    
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const users = await fetchAllUsuarios();
                setUsuariosList(users);
            } catch (error) {
                Alert.alert('Erro', (error as Error).message);
            }
        };
        loadUsers();
    }, []); 

    
    const handleLogin = () => {
        const usuarioEncontrado = usuariosList.find(
            (usuario) =>
                usuario.useremail === useremail && usuario.password === password
        );

        if (usuarioEncontrado) {
            Alert.alert('Login bem-sucedido!');
            
            navigation.navigate('Perfil', { 
                userId: usuarioEncontrado.id 
            });
        } else {
            Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
        }

    };

    return (
        <View style={styles.container}>
            
            <View style={styles.avatarContainer}>
                <Feather name="user" size={80} color="#fff" />
            </View>
            <TextInput
                //...
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Login;