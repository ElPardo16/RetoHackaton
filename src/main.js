import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormLogIn from '../src/Forms/FormLogIn'
import FormSignUp from './Forms/FormSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogIn/>} />
        <Route path="SignUp/" element={<FormSignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;