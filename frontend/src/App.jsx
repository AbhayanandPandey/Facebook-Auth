import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import PrivateRouter from './Components/PrivateRouter'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>} />
      </Routes>
      
    </>
  )
}

export default App
