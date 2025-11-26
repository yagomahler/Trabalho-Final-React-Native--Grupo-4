import axios from 'axios';
import React, { useState } from 'react';
import { View, Text , TextInput,Button, TouchableOpacity } from 'react-native';
import { PerfilPageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';
import Feather from '@expo/vector-icons/build/Feather';

export const Perfil: React.FC<{ navigation: PerfilPageNavigationProp }> = ({ navigation }) => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [usuariosList, setUsuariosList] = useState([]);

    
    axios.put ('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios',{
    }).then (response => {
        setUsuariosList (response.data);
    });
      const handlePerfilUpdate = () => {
        const updatedUsuario = {   
            useremail: useremail,
            password: password,
        };  
        axios.put('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios', updatedUsuario)
        .then(response => {
            console.log('Usuário atualizado com sucesso:', response.data);
            navigation.navigate('Home', {id: 'grupo 04' });
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error);
        });

    };
    
    axios.delete ('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios',{
    }).then (response => {
        setUsuariosList (response.data);
    });
      const handlePerfilDelete = () => {
        axios.delete('https://69236cb13ad095fb847084f7.mockapi.io/backstage/usuarios')
        .then(response => {
            console.log('Usuário deletado com sucesso:', response.data);
            navigation.navigate('Home', {id: 'grupo 04' });
        })
        .catch(error => {
            console.error('Erro ao deletar usuário:', error);
        });
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.avatarContainer}>
                <Feather name="user" size={80} color="#fff" />
            </View>

            <TouchableOpacity >
            <Text style={styles.linkText}>Edita Perfil</Text>
            </TouchableOpacity>            

            <TouchableOpacity>
            <Text style={styles.linkText}>Deleta Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.linkText}>Conectar a um dispositivo</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.linkText}>Configurações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Text style={styles.linkText}>Ajuda e Comentarios</Text>
            </TouchableOpacity>
            

        </View>
    );
};


export default Perfil;
