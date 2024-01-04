import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import FormLogin from "./pages/FormLogin"
import FormDaftar from "./pages/FormDaftar"
import ProductPage from "./pages/ProductPage"

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/"element={<FormLogin/>}></Route>
        <Route path="/daftar"element={<FormDaftar/>}></Route>
        <Route path="/products"element={<ProductPage/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

