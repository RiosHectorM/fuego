import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MatsForm from "./components/MatsForm.jsx";
import MatsList from "./components/MatsList.jsx";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
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