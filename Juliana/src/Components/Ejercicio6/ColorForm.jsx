import { useState } from "react"
import { getRandomNumber } from "../../helpers.js";
import ColorPicker from "./ColorPicker.jsx";

const ColorForm = (props) => {

  const {setColors} = props;

  const [color, setColor] = useState('#000000');

  const handleChange = (e) =>{
    setColor(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newColor = {
      id: getRandomNumber(0,5000),
      value: color,
    }

    setColors((prev)=>[...prev, newColor])

    setColor('#000000')
  };

  return (
      <form onSubmit={handleSubmit} className="card">
        <h5 className="card-header">Administrar colores</h5>
        <div className="card-body d-flex gap-4">
          <ColorPicker color={color} handleChange={handleChange}/>
          <p>{color}</p>
        </div>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
      
    // <div>
    //     <fieldset>
    //         <label htmlFor="color-input" className='form-label'>hola</label>
    //         <input type="color" id='color-input' name='color' className='form-control' placeholder="Ingrese un color"/>
    //     </fieldset>
    // </div>
  )
}

export default ColorForm