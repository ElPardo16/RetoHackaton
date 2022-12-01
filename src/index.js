import React from 'react';
import ReactDOM from 'react-dom/client';
import FormSignUp from './Forms/FormSignUp';
import './index.css';
import {  AuthProvider} from "./Forms/context/authContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <FormSignUp/>
    </AuthProvider>
  </React.StrictMode>
);