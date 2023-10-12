import { useEffect, useState } from "react";
import CardsGallery from "../Components/Ejercicio9/CardsGallery";
import Form from "../Components/Ejercicio9/Form";

const appointmentsLS =  JSON.parse(localStorage.getItem('appointments')) || [];

const Ejercicio9 = () => {

    const [appointments, setAppointment] = useState(appointmentsLS);

    useEffect(()=>{
        localStorage.setItem('appointments', JSON.stringify(appointments))
      }, [appointments])

      console.log(appointments)

    return (
        <>
        <h2>Complete el formulario para generar una cita</h2>
        <Form setAppointment = {setAppointment}/>
        <CardsGallery appointments = {appointments}/>
        </>
    )
}

export default Ejercicio9
