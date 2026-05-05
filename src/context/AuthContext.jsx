import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContextConfig = createContext();

const baseUrl = "http://localhost:3000/users";

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const currUser = localStorage.getItem("currentUser");
    return currUser ? JSON.parse(currUser) : null;
  });

  const login = async (user) => {
    try {
      const res = await axios.get(`${baseUrl}?email=${user.email}`);

      if (res.data.length > 0) {
        const usr = res.data[0];
        if (usr.password === user.password) {
          setCurrentUser(usr);
          localStorage.setItem("currentUser", JSON.stringify(usr));
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const signup = async (user) => {
    try {
      const res = await axios.post(baseUrl, user);
      setCurrentUser(res.data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      return true;
    } catch (e) {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContextConfig.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContextConfig.Provider>
  );
};

export default AuthContext;
