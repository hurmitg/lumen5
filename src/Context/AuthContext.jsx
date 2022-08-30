import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

function AppContextProviderComponent({ children }) {

  let localUser = JSON.parse(localStorage.getItem("user")) || {};

  const [isAuth, setIsAuth] = useState(localUser.isAuth || false);
  const [email, setEmail] = useState(localUser.isAuth || "");
  const [token, setToken] = useState(null);
  const [sub, setSub] = useState(localUser.sub || "");

  const toggle = () => {
    setIsAuth(!isAuth);
  };


  const loginUser = (email, token, sub) => {
    setEmail(email);
    setToken(token);
    setIsAuth(true);
    setSub(sub);

    let user = {
      email : email,
      isAuth : true,
      sub : sub,
    }
    
    localStorage.setItem("user", JSON.stringify(user))
  };

  const logoutUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("sub")
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
