import { useRef } from "react";
import { getRandomNumber } from "../../helpers";

const Form = (props) => {
    const {setAppointment} = props

    const nameRef = useRef();
    const ownerRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const symptomsRef = useRef();

    const isValidData = (name, owner, date, time, symptoms) => {
        // name
        if (name.trim().length < 2) {
            return false;
        }

        // surname
        if (owner.trim().length < 2) {
            return false;
            }
    
        //symptoms
        if (symptoms.trim().length < 10) {
            return false;
        }
    
        return true;
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const name = nameRef.current.value;
        const owner = ownerRef.current.value;
        const date = dateRef.current.value;
        const time = timeRef.current.value;
        const symptoms = symptomsRef.current.value;
    
        if (isValidData(name, owner, date, time, symptoms)) {
            alert('Datos enviados');
            setAppointment((appointments)=>[
                ...appointments,
                {
                    id:getRandomNumber(0, 5000),
                    name: name,
                    owner: owner,
                    date: date,
                    time: time,
                    symptoms: symptoms,
                }
            ])
        } else {
            alert('Completar todos los datos');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="name-input" className='form-label'>Nombre de la mascota</label>
                        <input type="text" ref={nameRef} id="name-input" name="name" className="form-control" />
                    </fieldset>
                    <fieldset className="mt-2">
                        <label htmlFor="owner-input" className='form-label'>Nombre del dueño</label>
                        <input type="text" ref={ownerRef} id="owner-input" name="owner" className="form-control" />
                    </fieldset>
                    <div className="d-flex justify-content-between">
                        <fieldset className="mt-2">
                            <label htmlFor="date-input" className='form-label'>Fecha</label>
                            <input type="date" ref={dateRef} id="date-input" name="date" className="form-control" />
                        </fieldset>
                        <fieldset className="mt-2">
                            <label htmlFor="time-input" className='form-label'>Hora</label>
                            <input type="time" ref={timeRef} id="time-input" name="time" className="form-control" />
                        </fieldset>
                    </div>
                    <fieldset className="mt-2">
                        <label htmlFor="symptoms-input" className='form-label'>Síntomas</label>
                        <input type="text" ref={symptomsRef} id="symptoms-input" name="symptoms" className="form-control" />
                    </fieldset>
                    <button type="submit" className="mt-3 btn btn-danger">Agregar una nueva cita</button>
                </form>
    )
}

export default Form