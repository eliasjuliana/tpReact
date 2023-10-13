import { useEffect, useState } from "react"
import ColorForm from "../Components/Ejercicio6/ColorForm"
import ColorsList from "../Components/Ejercicio6/ColorsList"

const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const Ejercicio6 = () => {

  const [colors, setColors] = useState(colorsLS);

  useEffect(()=>{
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors])

  return (
    <div className="container-fluid p-4 exercise-container">
        <h1>Administrar colores</h1>
        <ColorForm setColors={setColors}/>
        <ColorsList colors={colors} setColors={setColors}/>
    </div>
  )
}

export default Ejercicio6