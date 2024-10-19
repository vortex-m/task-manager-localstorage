import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(); 
    const { admin, employee } = getLocalStorage();
    setUserData({ admin, employee });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
