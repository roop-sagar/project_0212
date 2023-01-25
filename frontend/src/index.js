import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use( (req) => {
  let token = localStorage.getItem('token');
  req.headers.token= token || null;
  return req;
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

