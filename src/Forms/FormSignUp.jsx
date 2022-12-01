import React, { useState } from "react";
import "./Form.css";
import Form from "./Form.jsx";
import Inputs from "./Inputs.jsx";
import { useAuth } from "./context/authContext";

const FormSignUp = () => {
  const { signup } = useAuth();
  const [user, setUser] = useState({
    //creacion de un estado que englobe las variables que se van a guardar
    name: "",
    email: "",
    confirmEmail: "",
    pass: "",
    confirmPass: "",
  });

  const handleClick = () => {
    signup(user.email, user.pass, user.name);
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
