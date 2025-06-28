import { AuthContextType } from "@/types";
import React, { createContext } from "react";



const authContext = createContext<AuthContextType | null>(null);
export const AuthProvider = React.FC<{children: React.ReactNode}> = ({ children }) => {