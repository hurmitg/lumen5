import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

function AppContextProviderComponent({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [sub, setSub] = useState("")
  const toggle = () => {
    setIsAuth(!isAuth);
  };
  const loginUser = (email, token, sub) => {
    setEmail(email);
    setToken(token);
    setIsAuth(true);
    setSub(sub)
  };
  const logoutUser = () => {
    setEmail("");
    setToken(null);
    setIsAuth(false);
    setSub("");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, loginUser, logoutUser, email, token, sub, setSub }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AppContextProviderComponent;
