import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // --- Container Principal ---
    container: {
        flex: 1, // Ocupa a tela inteira
        backgroundColor: '#1C1C1C', // Fundo bem escuro (Dark Mode)
        alignItems: 'center', // Centraliza itens horizontalmente
        paddingTop: 80, // Espaço do topo (ajuste conforme necessário)
    },

    // --- Avatar/Ícone (Feather) ---
    avatarContainer: {
        marginBottom: 50,
        width: 100,
        height: 100,
        borderRadius: 50, // Deixa redondo
        borderWidth: 2,
        borderColor: '#B0B0B0', // Borda cinza claro
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333', // Fundo do ícone
    },

    // --- Campos de Input (Username e Password) ---
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#333333', // Fundo do campo (Cinza Médio)
        borderRadius: 25, // Borda arredondada (formato pílula)
        paddingHorizontal: 20,
        color: '#FFFFFF', // Texto digitado branco
        marginBottom: 20,
        fontSize: 16,
        // Sombra leve para dar profundidade (opcional)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },

    // --- Botão 'Entrar' ---
    button: {
        width: '85%',
        height: 50,
        backgroundColor: '#F0F0F0', // Fundo do botão (Cinza Claro/Quase Branco)
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#1C1C1C', // Texto escuro no botão claro
        fontSize: 18,
        fontWeight: 'bold',
    },

    // --- Links (Esqueceu a Senha / Criar Conta) ---
    linkText: {
        color: '#AAAAAA', // Texto de link cinza suave
        fontSize: 14,
        marginTop: 10,
        // Se quiser que pareça um link clicável:
        // textDecorationLine: 'underline',
    }
});

export default styles;
