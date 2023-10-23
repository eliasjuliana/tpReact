import { useRef } from "react";

const WeatherForm = (props) => {

  const {getWeather} = props;


  const locationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const location = locationRef.current.value;
    console.log(location)

    getWeather(location)
    // if (isValidData(location)) {
    //   alert('Datos enviados');
    // } else {
    //   alert('Ciudad no disponible');
    // }
  };


  return (
    <form onSubmit={handleSubmit} className="container m-4">
        <fieldset>
            <label htmlFor="location-input" className='form-label'>Buscar ciudad</label>
            <input type="text" ref={locationRef} id="location-input" name="location" className="form-control" />
        </fieldset>
        <button type="submit" className="btn btn-danger mt-3">Buscar</button>
      </form>
  )
}

export default WeatherForm