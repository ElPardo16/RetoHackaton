import React from 'react'
import Inputs from '../Inputs'
import Form from './Form'

function FormLogIn() {
  return (
    <Form>
      <Inputs type="email" placeholder="Correo electronico" />
      <Inputs type="password" placeholder="Contraseña" />
    </Form>
  )
}

export default FormLogIn