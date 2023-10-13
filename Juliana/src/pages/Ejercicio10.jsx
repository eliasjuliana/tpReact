import Form from "../Components/Ejercicio10/Form"
import CardsGallery from "../Components/Ejercicio10/CardsGallery"
import { useEffect, useState } from "react";

const moviesLS =  JSON.parse(localStorage.getItem('movies')) || [];

const Ejercicio10 = () => {

  const [movies, setMovie] = useState(moviesLS);

  useEffect(()=>{
      localStorage.setItem('appointments', JSON.stringify(movies))
    }, [movies])

  return (
    <div className="container-fluid p-5">
        <h2>Complete el formulario para generar una cita</h2>
        <Form setMovie={setMovie}/>
        <CardsGallery movies={movies}/>
    </div>
  )
}

export default Ejercicio10