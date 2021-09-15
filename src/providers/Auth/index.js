import {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { firebaseApp } from "../../firebaseApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setLoggedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
