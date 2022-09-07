import React from 'react'

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MatsForm from "./components/MatsForm.jsx";
import MatsList from "./components/MatsList.jsx";
import CargaDatos from "./components/CargaDatos.jsx"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CargaDatos />
        
        <Routes>
          <Route path="/" element={<MatsList />} />
          <Route path="/addMaterial" element={<MatsForm />} />
          <Route path="/editMaterial/:id" element={<MatsForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App