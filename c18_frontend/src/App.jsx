import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="flex text-sm">
            <Sidebar />

            <div className="flex-grow"></div>
          </div>
        </div>
      </BrowserRouter>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
