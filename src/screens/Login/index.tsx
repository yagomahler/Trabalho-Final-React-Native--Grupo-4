import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './style';
export const Login: React.FC<{ navigation: LoginPageNavigationProp }> = ({ navigation }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [usuariosList, setUsuariosList] = useState([]);
    axios.get ('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios',{
    }).then (response => {
        setUsuariosList (response.data);
    }); 
    const handleLogin = async () => {
        const usuarioEncontrado = usuariosList.find(
            (usuario: { useremail: string; password: string }) =>
                usuario.useremail === useremail && usuario.password === password
        );
        if (usuarioEncontrado) {
            Alert.alert('Login bem-sucedido!');
            
        } else {
            Alert.alert('Credenciais inválidas. Tente novamente.');
        }
        try {
            const response = await axios.get('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios');
            const usuarios = response.data;
            setUsuariosList(usuarios);
        }
        catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
};
      return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Feather name="user" size={80} color="#fff" />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#aaa"
                onChangeText={setUseremail}
                value={useremail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
                value={password}
                secureTextEntry 
            />            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity >
            <Text style={styles.linkText}>Esqueceu a Senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.linkText}>Criar Conta</Text>
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