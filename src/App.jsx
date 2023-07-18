import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Listado from './components/Listado'
import Detail from './components/Detail'
import Login from './components/Login'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import '../src/styles/Listado.css'

function App() {


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/listado' element={<Listado />} />
            <Route path='/listado/:id' element={<Detail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
