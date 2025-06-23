import React, { createContext, useContext, useState ,useEffect} from 'react';
import App from '../App';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Yeh state login user ko store karegi
   useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
     <App/>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
