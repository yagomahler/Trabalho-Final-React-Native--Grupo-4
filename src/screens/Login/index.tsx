import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LoginPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './style';
import { useUser } from '../../contexts/userContext';


interface UsuarioAPI {
    id: string;
    email: string;
    senha: string;
    nome: string;
}

export const Login: React.FC<{ navigation: LoginPageNavigationProp }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuariosList, setUsuariosList] = useState<UsuarioAPI[]>([]);
    const [loading, setLoading] = useState(true);

    const userContext = useUser();


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios');
                setUsuariosList(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
                Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleLogin = async () => {
         if (!userContext) {
            Alert.alert('Erro', 'Serviço de login indisponível (UserProvider não encontrado).');
            return;
        }
        const usuarioEncontrado = usuariosList.find(
            (usuario) =>
                usuario.email === email && usuario.senha === password
        );

        try {
            if (usuarioEncontrado) {

                await userContext?.login({
                    id: usuarioEncontrado.id,
                    email: usuarioEncontrado.email,
                    senha: usuarioEncontrado.senha,
                    nome: usuarioEncontrado.nome,
                });

                Alert.alert('Login bem-sucedido!');
                navigation.navigate('Perfil', { id: 'Grupo4' });
            } else {
                Alert.alert('Credenciais inválidas. Tente novamente.');
            }
        }
        catch (error) {
            console.error('Erro ao efetuar login:', error);
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
                onChangeText={setEmail}
                value={email}
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
