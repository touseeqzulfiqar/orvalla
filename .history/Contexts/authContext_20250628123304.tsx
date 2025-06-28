import { auth } from "@/config/firebase";
import { AuthContextType, UserType } from "@/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";



const authContext = createContext<AuthContextType | null>(null);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserType>(null);

    const login = async (email: string, password: string) => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            return {success: true};
        }
        catch(error: any) {     
            console.error("Login failed:", error);
            throw error;
        }
    }
    const register = async (email: string, password: string, name: string) => {
        try{
            let response = crea
            return {success: true};
        }
        catch(error: any) {     
            console.error("Login failed:", error);
            throw error;
        }
    }
};