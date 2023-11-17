import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App';
import { Navbar } from './Components/Navbar';
import { Inicio } from './Components/Inicio';
import { Introducción } from './Components/Introducción'
import { Roles } from './Components/Roles';
import { Caracteristicas } from './Components/Caracteristicas';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Register } from './Components/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Inicio /> */}
    {/* <Introducción /> */}
    {/* <Roles /> */}
    {/* <Caracteristicas /> */}
    {/* <Footer /> */}
    {/* <Login /> */}
    <Register />
  </React.StrictMode>
);