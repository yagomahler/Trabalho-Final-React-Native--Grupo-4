import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


type UserData = {
    id: string;
    useremail: string; 
    password: string;  
    nome: string;    
} | null;

interface UserContextType {
  usuarioLogado: UserData;
  login: (userData: UserData) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);


export function useUser() {
  const context = useContext(UserContext);
  return context;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [usuarioLogado, setUsuarioLogado] = useState<UserData>(null);

  useEffect(() => {
    const loadStoredUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("usuarioLogado");
            if (savedUser) {
                setUsuarioLogado(JSON.parse(savedUser));
            }
        } catch (error) {
            console.error("Erro ao carregar usuário:", error);
        }
    };

    loadStoredUser();
  }, []);

  const login = async (userData: UserData) => {
    setUsuarioLogado(userData);
    try {
        await AsyncStorage.setItem("usuarioLogado", JSON.stringify(userData));
    } catch (error) {
         console.error("Erro ao salvar login:", error);
    }
  };

  const logout = async () => {
    setUsuarioLogado(null);
    try {
        await AsyncStorage.removeItem("usuarioLogado");
    } catch (error) {
         console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <UserContext.Provider value={{ usuarioLogado, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}