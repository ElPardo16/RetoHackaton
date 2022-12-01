import React from "react";
import "./Form.css";
import Form from "./Form.jsx";
import Inputs from '../Forms/Inputs.jsx'


const FormSignUp = () => {
  return (
    <Form>
      <p>
        Registrarse
      </p>
      <Inputs type="text" placeholder="Nombre" />
      <Inputs type="email" placeholder="Correo electronico" />
      <Inputs type="email" placeholder="Confirmar correo electronico" />
      <Inputs type="password" placeholder="Contraseña"/>
      <Inputs type="password" placeholder="Confirmar contraseña" />
      <button className="btn">Registrarse</button>
    </Form>
  );
};

export default FormSignUp;
