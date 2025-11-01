import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  email: string;
  setEmail: (email: string) => void;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (userEmail: string) => {
    setEmail(userEmail);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setEmail("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ email, setEmail, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
