import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CadastroPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { cadastrarNovoUsuario } from '../../services/MockApi';
import { styles } from './styles';
import GradientBackground from '../../components/GradientBackground';
import Input from '../../components/Input';

export const Cadastro : React.FC<{ navigation: CadastroPageNavigationProp }> = ({ navigation }) => {
    const [usernome, setUsernome] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    

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
            
          
            navigation.navigate('Login', { id: 'grupo 04' });
            
        } catch (error) {
          
            Alert.alert('Erro', (error as Error).message); 
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

return (
    
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Feather name="user-plus" size={80} color="#fff" />
            </View>
            <Text style={styles.title}>Cadastrar novo usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#aaa"
                onChangeText={setUsernome}
                value={usernome}
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
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', {id: "Grupo4"})}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            
            <GradientBackground/>
        </View>
    );

};
export default Cadastro;