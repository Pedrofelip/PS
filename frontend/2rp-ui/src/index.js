import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import App from './pages/perfilUsuario/App';
import Login from './pages/login/login'
import Home from './pages/home/home'
import Cadastrar from './pages/cadastrar/cadastrar'
import Listar from './pages/listarUsuario/listarUsuario'

import reportWebVitals from './reportWebVitals';




const routing = (
  <BrowserRouter>
      <Routes>
        <Route path="/perfil" element = {<App/>}/>
        <Route path="/" element = {<Login/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/cadastrar" element = {<Cadastrar/>}/>
        <Route path="/listar" element = {<Listar/>}/>
      </Routes>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
