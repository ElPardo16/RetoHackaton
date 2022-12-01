import React, { useState } from "react";
import "./Form.css";
import Form from "./Form.jsx";
import Inputs from "./Inputs.jsx";
import { useAuth } from "./context/authContext";
import {useNavigate} from 'react-router-dom'

const FormSignUp = () => {
  const { signup } = useAuth();
  const navigate =useNavigate();
  const [user, setUser] = useState({
    //creacion de un estado que englobe las variables que se van a guardar
    name: "",
    email: "",
    confirmEmail: "",
    pass: "",
    confirmPass: "",
  });

  const handleClick = () => {
    try{
      signup(user.email, user.pass,user.name)
      navigate('/');
    } catch (error){
      console.log(error.message)
    }
  };
  return (
    <Form>
      <Inputs
        type="text"
        placeholder="Nombre"
        name="name"
        setInputUserName={setUser}
        inputUserName={user}
      />
      <Inputs
        type="email"
        placeholder="Correo electronico"
        name="email"
        setInputUserName={setUser}
        inputUserName={user}
      />
      <Inputs
        type="email"
        name="confirmEmail"
        placeholder="Confirmar correo electronico"
      />
      <Inputs
        type="password"
        placeholder="Contraseña"
        name="pass"
        setInputUserName={setUser}
        inputUserName={user}
      />
      <Inputs
        type="password"
        name="confirmPass"
        placeholder="Confirmar contraseña"
      />
      <button className="btn" onClick={handleClick}>
        Registrarse
      </button>
    </Form>
  );
};

export default FormSignUp;
