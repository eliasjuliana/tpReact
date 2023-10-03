import { useRef, useState } from "react"
import List from "../Components/Ejercicio4/List.jsx"
import { getRandomNumber } from "../helpers.js";

const Ejercicio4 = () => {

    const [homeworks, setHomeworks] = useState([]);

    const homeworkRef = useRef();

    const isValid = (homework) =>{
        if (homework.trim().length < 2) {
            return false;
        }

        return true;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const homework = homeworkRef.current.value;

        if (isValid(homework)) {
            alert('Agregaste una nueva tarea!');
            setHomeworks([
                ...homeworks,
                {
                    id: getRandomNumber(0, 1000),
                    content: homework,
                }
            ])
          } else {
            alert('No se agrego la tarea');
        }
    };

    return (
        <div className="container p-5 bg-dark">
            <h1>Bienvenido</h1>
            <h2>Ingresa tus tareas</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="homework-input" className='form-label'></label>
                    <input type="text" ref={homeworkRef} id='homework-input' name='homework' className='form-control'/>
                </fieldset>
                <button type='submit' className='btn btn-primary mt-3 mb-3'>Agregar</button>
            </form>
            <List homeworks = {homeworks}/>
        </div>

    )
}

export default Ejercicio4