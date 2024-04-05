import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

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
    </>
  );
}

export default App;
