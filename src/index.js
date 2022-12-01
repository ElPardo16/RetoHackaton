import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import FormSignUp from './Forms/FormSignUp';
import './index.css';
import { AuthProvider } from "./Forms/context/authContext";
import FormLogIn from './Forms/FormLogIn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FormLogIn />
        <FormSignUp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);