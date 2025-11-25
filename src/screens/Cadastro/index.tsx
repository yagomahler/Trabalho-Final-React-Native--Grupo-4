
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from  './styles';
import { CadrastroPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { useState } from 'react';
import axios from 'axios';

export const Cadastro : React.FC<{ navigation: CadrastroPageNavigationProp }> = ({ navigation }) => {
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
            navigation.navigate('Login');
        })
        .catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
        });
    };  
        return (
        <View style={styles.container}>
            <Text>Criar Conta</Text>

            <Text>Registre-se com seu email</Text>

            <Text>Email</Text>
            <TextInput
                keyboardType="email-address"
                value={useremail}
                onChangeText={text => setUseremail(text)}
            />
            <Text>Senha</Text>
            <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={handleCadastro}><Text>Cadastrar</Text></TouchableOpacity>

        </View>
    );
}
export default styles;
