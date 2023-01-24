import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));

axios.interceptors.request.use( (req) => {
  let token = localStorage.getItem('token');
  req.headers.token= token || null;
  return req;
})
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

