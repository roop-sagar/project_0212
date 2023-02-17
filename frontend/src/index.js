import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';

// axios.defaults.baseURL = 'https://2136-103-49-55-89.in.ngrok.io';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.interceptors.request.use( (req) => {
  let token = localStorage.getItem('token');
  req.headers.token= token || null;
  return req;
})
axios.interceptors.response.use( (res) => {
  
 return res;

})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

