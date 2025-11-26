import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CadastroPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';

export const Cadastro : React.FC<{ navigation: CadastroPageNavigationProp }> = ({ navigation }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [usuariosList, setUsuariosList] = useState([]);
    
    axios.post ('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios',{
    }).then (response => {
        setUsuariosList (response.data);
    }); 
    const handleCadastro = () => {
        const novoUsuario = {   
            useremail: useremail,
            password: password,
        };  
        axios.post('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios', novoUsuario)
        .then(response => {
            console.log('Usuário cadastrado com sucesso:', response.data);
            navigation.navigate('Login', { id: 'grupo 04' });
        })
        .catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
        });
    };  
        return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Feather name="user-plus" size={80} color="#fff" marginLeft={15}/>
            </View>
            <Text style={styles.title}>Cadastrar novo usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#aaa"
                onChangeText={setUseremail}
                value={useremail}
                autoCapitalize="none"
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', {id: "Grupo4"})}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <LinearGradient
                colors={['transparent', '#aa00a9']}
                start={{ x: 0, y: 1 }}
                end={{ x: 6, y: 1 }}
                style={styles.gradient}
            />
        </View>
    );
}
export default Cadastro;
