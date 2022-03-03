import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextData } from "../models/AuthContextData.model";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const user = await AsyncStorage.getItem("@auth:user");
      if (user) setUser(JSON.parse(user));
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(): Promise<void> {
    setUser({});
    await AsyncStorage.setItem("@auth:user", JSON.stringify({}));
  }

  async function signOut(): Promise<void> {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
