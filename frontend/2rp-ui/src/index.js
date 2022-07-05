import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import App from './pages/perfilUsuario/App';


import reportWebVitals from './reportWebVitals';


const routing = (
  <Router>
      <Routes>
        <Route exact path="/">
          {App}
        </Route>
      </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
