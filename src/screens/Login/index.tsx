import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginPageNavigationProp } from '../../routes/navigators/StackNavigator';
import styles from './style';
export const Login: React.FC<{ navigation: LoginPageNavigationProp }> = ({ navigation }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [ registeredUsers, setRegisteredUsers ] = useState( false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<any>(null);
    const apiUrl = 'https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios'; 
    const handleLogin = async () => {
      console.log('Tentativa de Login:', useremail, password);
      setLoading(true);
      setError(null);
    try {
        const response = await fetch(apiUrl);
        const users = await response.json(); 
        if (!response.ok) {
             throw new Error('Falha ao buscar usuários na API.');
        }
        const userFound = users.find(
          (user: any) => user.useremail === useremail && user.password === password
        );
        if (userFound) {
            console.log('Login bem-sucedido! Dados:', userFound);
            setUserData(userFound); 
            Alert.alert('Sucesso', 'Login realizado com êxito!');
            
        } else {
            console.error('Falha no Login: Credenciais inválidas.');
            Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
            setError('Credenciais inválidas.');
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor. Verifique sua MockAPI ou conexão.');
        setError('Erro de conexão.');
    } finally {
        setLoading(false);
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
