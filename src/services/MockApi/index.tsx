import axios from 'axios';

const API_URL = 'https://69236cb13ad095fb847084f7.mockapi.io/usuarios';

export interface Usuario {
    id: string; 
    useremail: string;
    password: string;
}

export const fetchAllUsuarios = async (): Promise<Usuario[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuários na API:", error);
        throw new Error('Falha na comunicação com o servidor.'); 
    }
};



interface NovoUsuarioPayload {
    usernome?: string; 
    useremail: string;
    password: string;
}
export const cadastrarNovoUsuario = async (dados: NovoUsuarioPayload) => {
    try {
        const response = await axios.post(API_URL, dados);
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar usuário na API:", error);
        throw new Error('Falha no cadastro. Tente novamente mais tarde.'); 
    }
};



export interface Usuario {
    id: string; 
    useremail: string;
    password: string;
}

export const fetchUsuarioById = async (userId: string): Promise<Usuario> => {
    try {
        const response = await axios.get<Usuario>(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário ${userId}:`, error);
        throw new Error('Não foi possível carregar os dados do perfil.');
    }
};

export const updateUsuario = async (userId: string, data: { useremail: string, password: string }): Promise<Usuario> => {
    try {
        const response = await axios.put<Usuario>(`${API_URL}/${userId}`, data);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar usuário ${userId}:`, error);
        throw new Error('Não foi possível atualizar o perfil. Verifique as credenciais.');
    }
};

export const deleteUsuario = async (userId: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${userId}`);
    } catch (error) {
        console.error(`Erro ao deletar usuário ${userId}:`, error);
        throw new Error('Não foi possível deletar o perfil.');
    }
};