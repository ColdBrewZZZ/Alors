import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
//import Ex10 from './Ex10';

ReactDOM.render((
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
), document.getElementById('root'))


