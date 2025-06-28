import { AuthContextType } from "@/types";
import { createContext } from "react";



const authContext = createContext<AuthContextType | null>(null);