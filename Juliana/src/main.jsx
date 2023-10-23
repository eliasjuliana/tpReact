import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import Ejercicio1 from './pages/Ejercicio1.jsx'
import Ejercicio2 from './pages/Ejercicio2.jsx'
import Ejercicio3 from './pages/Ejercicio3.jsx'
import Ejercicio4 from './pages/Ejercicio4.jsx'
import Ejercicio5 from './pages/Ejercicio5.jsx'
import Ejercicio6 from './pages/Ejercicio6.jsx'
import Ejercicio7 from './pages/Ejercicio7.jsx'
import Ejercicio8 from './pages/Ejercicio8.jsx'
import Ejercicio9 from './pages/Ejercicio9.jsx'
import Ejercicio10 from './pages/Ejercicio10.jsx'
import Ejercicio11 from './pages/Ejercicio11.jsx'
import Ejercicio12 from './pages/Ejercicio12.jsx'
import Ejercicio13 from './pages/Ejercicio13.jsx'

import Navbar from './Commons/Navbar'
import Footer from './Commons/Footer'
import Home from './pages/Home.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import './Components/Ejercicio6/styles.css'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Toaster richColors position="top-right"/>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/Ejercicio1' element={<Ejercicio1/>}></Route>
              <Route exact path='/Ejercicio2' element={<Ejercicio2 message={'my friend!'}/>}></Route>
              <Route exact path='/Ejercicio3' element={<Ejercicio3 propsMessage={'my friend!'}/>}></Route>
              <Route exact path='/Ejercicio4' element={<Ejercicio4/>}></Route>
              <Route exact path='/Ejercicio5' element={<Ejercicio5/>}></Route>
              <Route exact path='/Ejercicio6' element={<Ejercicio6/>}></Route>
              <Route exact path='/Ejercicio7' element={<Ejercicio7/>}></Route>
              <Route exact path='/Ejercicio8' element={<Ejercicio8/>}></Route>
              <Route exact path='/Ejercicio9' element={<Ejercicio9/>}></Route>
              <Route exact path='/Ejercicio10' element={<Ejercicio10/>}></Route>
              <Route exact path='/Ejercicio11' element={<Ejercicio11/>}></Route>
              <Route exact path='/Ejercicio12' element={<Ejercicio12/>}></Route>
              <Route exact path='/Ejercicio13' element={<Ejercicio13/>}></Route>
            </Routes>
            <Home/>
          <Footer/>
        </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>,
)
