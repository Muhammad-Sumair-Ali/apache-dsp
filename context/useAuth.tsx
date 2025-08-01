"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export interface IUser {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  companyName: string;
  jobTitle: string;
  jobFunction?: string;
  stripeCustomerId?: string;
  createdAt?: string; 
  updatedAt?: string;
  __v?: number;
}


interface AuthContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  console.log("current user =>", user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/auth/current-user");
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const logout = async () => {
    await axios.post("/api/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
