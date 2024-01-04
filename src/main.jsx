import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Mengganti BrowserRouter dengan HashRouter
import './index.css';

import FormLogin from './pages/FormLogin';
import FormDaftar from './pages/FormDaftar';
import ProductPage from './pages/ProductPage';
import error404 from './pages/404';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/daftar" element={<FormDaftar />} />
        <Route path="/products" element={<ProductPage />} />
        <Route exact path="*" element={error404}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
