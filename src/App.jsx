import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter

import './index.css';

import FormLogin from './pages/FormLogin';
import FormDaftar from './pages/FormDaftar';
import ProductPage from './pages/ProductPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/daftar" element={<FormDaftar />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

export default App