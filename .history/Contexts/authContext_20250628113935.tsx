import { AuthContextType, UserType } from "@/types";
import React, { createContext } from "react";



const authContext = createContext<AuthContextType | null>(null);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserType>
};