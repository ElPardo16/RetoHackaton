import { createContext, useContext } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext(); //crear el contexto

export const useAuth = () => {
  //crear custom hook para obtener los datos del contexto
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const signup = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password).then((response) =>
      updateProfile(auth.currentUser, { displayName: name }).then(() =>
        console.log(auth.currentUser)
      )
    );
  };
  return (
    // componente que contiene el contexto
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}
