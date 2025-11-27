import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react'; 
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './style';
import { fetchAllUsuarios} from '../../services/MockApi'; 
import { useUser } from '../../contexts/userContext';


export interface Usuario {
    id: string; 
    useremail: string;
    password: string;
}
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
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#aaa"
                onChangeText={setUseremail}
                value={useremail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro', {id: "Grupo4"})}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.linkText}>Esqueceu a Senha?</Text>
            </TouchableOpacity>
            <LinearGradient
                colors={['transparent', '#aa00a9']}
                start={{ x: 0, y: 1 }}
                end={{ x: 6, y: 1 }}
                style={styles.gradient}
            />
        </View>
    );
};

export default Login;