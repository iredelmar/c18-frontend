import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import MetasUsuario from './components/MetasUsuario';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/login/Login';


function App() {
  const [activeRoute, setActiveRoute] = useState('/');

  return (
    <>
      <Navbar />
      <Login />
    </>
    <BrowserRouter>
      <div className="flex text-sm font-inter">
        <Sidebar setActiveRoute={setActiveRoute} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Verifica si la ruta activa coincide con /metas-usuario */}
            {activeRoute === '/metas-usuario' && (
              <Route path="/metas-usuario" element={<MetasUsuario />} />
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
