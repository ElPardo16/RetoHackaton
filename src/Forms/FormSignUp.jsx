import React from "react";
import Form from "./Form.jsx";
import Inputs from "../Inputs.jsx";

const FormSignUp = () => {
  return (
    <Form>
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
