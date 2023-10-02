import React from 'react'
import ReactDOM from 'react-dom/client'

// import Ejercicio1 from './pages/Ejercicio1.jsx'
// import Ejercicio2 from './pages/Ejercicio2.jsx'
// import Ejercicio3 from './pages/Ejercicio3.jsx'
import List from './pages/Ejercicio7.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
// import EmployeeCard from './Components/Ejercicio7/EmployeeCard'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Ejercicio1 /> */}
    {/* <Ejercicio2 message='my friend'/> */}
    {/* <Ejercicio3 propsMessage='my friend' /> */}
    <List/>
  </React.StrictMode>,
)
