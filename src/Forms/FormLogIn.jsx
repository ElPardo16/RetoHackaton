import React from 'react'
import "./Form.css";
import Inputs from '../Forms/Inputs.jsx'
import Form from './Form'

function FormLogIn() {
  return (
    <Form>
      <Inputs type="email" placeholder="Correo electronico" />
      <Inputs type="password" placeholder="Contraseña" />
      <button className="btn">Iniciar sesión</button>
    </Form>
  )
}

export default FormLogIn