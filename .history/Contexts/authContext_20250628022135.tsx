import { AuthContextType } from "@/types";
import { createContext } from "react";



const authContext = createContext<AuthContextType | null>(null);
export const AuthProvider = authContext.Provider;