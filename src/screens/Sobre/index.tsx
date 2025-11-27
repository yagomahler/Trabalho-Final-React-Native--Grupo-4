import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export const Sobre = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o Projeto</Text>

      <Text style={styles.description}>
        Aplicativo desenvolvido como trabalho (P2) da disciplina de
        React Native. A proposta foi criar
        um App de música funcional, com integração à API pública Deezer
        e foco em experiência do usuário.
      </Text>

      <Text style={[styles.title, { marginTop: 25, fontSize: 22 }]}>
        Equipe de Desenvolvimento
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>• Marcos Felix</Text> — Desenvolveu a
        tela Home, o design geral do aplicativo, UI Components e diversos
        elementos de interface.
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>• Lucca Zappala</Text> — Responsável pela
        tela de Player, lógica de reprodução, integração com a API Deezer
        (REST) e serviços de dados.
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>• Bruno Barbosa</Text> — Criou a tela
        de Artista e suas funcionalidades.
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>• Yago Mahler</Text> — Desenvolveu a
        tela de Álbum, contexto global do player e sistema de navegação
        entre telas.
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>• Bruno Ireno</Text> — Responsável
        pela tela de Login e pelo fluxo de autenticação do usuário.
      </Text>

      <LinearGradient
        colors={['transparent', '#aa00a9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 6, y: 1 }}
        style={styles.gradient}
      />
    </ScrollView>
  );
};

export default Sobre;