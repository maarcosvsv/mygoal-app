// Routes.js
import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Metas from './pages/Metas';

function Rotas() {

    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Login />}  />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/metas" element={<Metas />} />
            </Routes>
        </Router>
    );
}

export default Rotas;
