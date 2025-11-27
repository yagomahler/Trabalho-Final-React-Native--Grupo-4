import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'; // Importamos Alert
import styles from  './styles';
import { CadastroPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { useState } from 'react';


import { cadastrarNovoUsuario } from '../../services/MockApi'; 


export const Cadastro : React.FC<{ navigation: CadastroPageNavigationProp }> = ({ navigation }) => {
    const [usernome, setUsernome] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleCadastro = async () => { 
        if (!useremail || !password || !usernome) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.'); 
            return;
        }
        
        const novoUsuarioPayload = { 
            usernome: usernome,
            useremail: useremail,
            password: password,
        };
        
        try {
            const novoUsuario = await cadastrarNovoUsuario(novoUsuarioPayload);
            
            Alert.alert(
                'Sucesso!', 
                `Usuário ${novoUsuario.useremail} cadastrado com sucesso!`
            );
            
            // Redireciona para a tela de Login
            navigation.navigate('Login', { id: 'grupo 04' });
            
        } catch (error) {
            // Captura o erro lançado pelo serviço
            Alert.alert('Erro', (error as Error).message); 
            console.error('Erro ao cadastrar usuário:', error);
        }
    };
    
    return (
        <View style={styles.container}>
            <Text>Criar Conta</Text>
            <Text>Registre-se com seu email</Text>

            <Text>Nome</Text>
            <TextInput
                keyboardType="default"
                value={usernome}
                onChangeText={text => setUsernome(text)}
            />

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
            <TouchableOpacity onPress={handleCadastro}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Cadastro;