import { useRef, useState, useEffect } from "react"
import List from "../Components/Ejercicio4/List.jsx"
import { getRandomNumber } from "../helpers.js";

const taskLS =  JSON.parse(localStorage.getItem('tasks')) || [];

const Ejercicio5 = () => {

    const [tasks, setTasks] = useState(taskLS);

    const taskRef = useRef();

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(tasks))
      }, [tasks])

    const isValid = (task) =>{
        if (task.trim().length < 2) {
            return false;
        }

        return true;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const task = taskRef.current.value;

        if (isValid(task)) {
            alert('Agregaste una nueva tarea!');
            setTasks([
                ...tasks,
                {
                    id: getRandomNumber(0, 1000),
                    content: task,
                }
            ])
        } else {
            alert('No se agrego la tarea');
        }
    };

    return (
        <div className="container-fluid p-5 bg-dark exercise-container">
            <h1>Bienvenido</h1>
            <h2>Ingresa tus tareas</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="task-input" className='form-label'></label>
                    <input type="text" ref={taskRef} id='task-input' name='task' className='form-control'/>
                </fieldset>
                <button type='submit' className='btn btn-primary mt-3 mb-3'>Agregar</button>
            </form>
            <List tasks = {tasks}/>
        </div>

    )
}

export default Ejercicio5