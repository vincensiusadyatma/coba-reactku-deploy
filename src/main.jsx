import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Switch, Route } from 'react-router-dom'; // Mengganti BrowserRouter dengan HashRouter
import './index.css';

import FormLogin from './pages/FormLogin';
import FormDaftar from './pages/FormDaftar';
import ProductPage from './pages/ProductPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" element={<FormLogin />} />
        <Route path="/daftar" element={<FormDaftar />} />
        <Route path="/products" element={<ProductPage />} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
);
