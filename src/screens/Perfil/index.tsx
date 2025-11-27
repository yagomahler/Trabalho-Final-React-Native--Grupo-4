import React, { useEffect, useState } from 'react';
import { View, Text , TextInput, TouchableOpacity, Alert } from 'react-native';
import { PerfilPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';
import Feather from '@expo/vector-icons/build/Feather';

import { 
    fetchUsuarioById, 
    updateUsuario, 
    deleteUsuario,
    Usuario 
} from '../../services/MockApi'; 

interface PerfilProps{
    navigation: PerfilPageNavigationProp;
    route: any; }

export const Perfil: React.FC<PerfilProps> = ({ navigation, route }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    const userId = route.params?.userId || '1'; 
    
     useEffect(() => {
        const loadPerfil = async () => {
            if (userId) {
                setIsLoading(true);
                try {
                    const data = await fetchUsuarioById(userId);
                    setUseremail(data.useremail);
                    setPassword(data.password); 
                } catch (error) {
                    Alert.alert('Erro', (error as Error).message);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        loadPerfil();
    }, [userId]);

    const handlePerfilUpdate = async () => {
        if (!useremail || !password) {
            Alert.alert('Atenção', 'Email e senha não podem ser vazios.');
            return;
        }

        setIsLoading(true);
        try {
            await updateUsuario(userId, { useremail, password });
            
            Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
            navigation.navigate('Home', {id: 'grupo 04' });
            
        } catch (error) {
            Alert.alert('Erro', (error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePerfilDelete = () => {
        Alert.alert(
            "Confirmação", 
            "Tem certeza que deseja deletar o perfil? Esta ação é irreversível.", 
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Deletar', 
                    style: 'destructive', 
                    onPress: async () => {
                        setIsLoading(true);
                        try {
                            await deleteUsuario(userId);
                            
                            Alert.alert("Conta Excluída", "Seu perfil foi deletado com sucesso.");
                            
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' as any}],
                            });
                            
                        } catch (error) {
                            Alert.alert('Erro', (error as Error).message);
                        } finally {
                             setIsLoading(false);
                        }
                    }
                },
            ]
        );
    };

    if (isLoading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.avatarContainer}>
                <Feather name="user" size={80} color="#fff" />
                <Text style={{ marginTop: 8, color: '#333' }}>ID: {userId}</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Novo Email"
                value={useremail}
                onChangeText={setUseremail} 
                keyboardType="email-address"
                autoCapitalize='none'
                editable={!isLoading}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova Senha"
                value={password}
                onChangeText={setPassword} 
                secureTextEntry={true} 
                editable={!isLoading}
            />
            
            <TouchableOpacity onPress={handlePerfilUpdate} disabled={isLoading}>
            <Text style={styles.linkText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePerfilDelete} disabled={isLoading}>
            <Text style={[styles.linkText, { color: 'red' }]}>Deletar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={isLoading}>
            <Text style={styles.linkText}>Conectar a um dispositivo</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={isLoading}>
            <Text style={styles.linkText}>Configurações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity disabled={isLoading}>
            <Text style={styles.linkText}>Ajuda e Comentarios</Text>
            </TouchableOpacity>
            
        </View>
    );
};


export default Perfil;