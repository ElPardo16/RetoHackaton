import React, { useState } from "react";
import "./Form.css";
import Form from "./Form.jsx";
import Inputs from "./Inputs.jsx";
import { useAuth } from "./context/authContext";
import {useNavigate} from 'react-router-dom'

const FormLogIn = () => {
  const { login } = useAuth();
  const navigate =useNavigate();
  const [user, setUser] = useState({
    //creacion de un estado que englobe las variables que se van a guardar
    email: "",
    pass: "",

  });

  const handleClick = () => {
    try{
      login(user.email, user.pass)
      navigate('/');
    } catch (error){
      console.log(error.message)
    }
  };
  return (
    <Form>
      <Inputs
        type="email"
        placeholder="Correo electronico"
        name="email"
        setInputUserName={setUser}
        inputUserName={user}
      />
      <Inputs
        type="password"
        placeholder="Contraseña"
        name="pass"
        setInputUserName={setUser}
        inputUserName={user}
      />
      <button className="btn" onClick={handleClick}>
        Iniciar sesión
      </button>
    </Form>
  );
};

export default FormLogIn;
