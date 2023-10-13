import { useRef } from "react";
import { getRandomNumber } from "../../helpers";

const Form = (props) => {

    const {setMovie} = props;

    const nameRef = useRef();
    const descriptionRef = useRef();
    const genreRef = useRef();

    const isValidData = (name, description, genre) => {
        // name
        if (name.trim().length < 2) {
            return false;
        }

        // description
        if (description.trim().length < 2) {
            return false;
            }
    
        //genre
        if (genre === '') {
            return false;
        }
    
        return true;
    };
    

    const handleSubmit = (e) =>{
        e.preventDefault();

        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const genre = genreRef.current.value;

        if (isValidData(name, description, genre)) {
            alert('Datos enviados');
            setMovie((movies)=>[
                ...movies,
                {
                    id:getRandomNumber(0, 5000),
                    name: name,
                    description: description,
                    genre: genre,
                }
            ])
        } else {
            alert('Completar todos los datos');
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name-input" className='form-label'>Nombre</label>
                <input type="text" ref={nameRef} id="name-input" name='name' className="form-control"/>
            </fieldset>
            <fieldset>
                <label htmlFor="description-input" className='form-label'>Descripcion</label>
                <input type="text-area" ref={descriptionRef} id="description-input" name='description' className="form-control"/>
            </fieldset>
            <fieldset>
                <label htmlFor="genre-input" className='form-label'>Genero</label>
                <select ref={genreRef} id="genre-input" name='genre' className="form-control">
                <option value=''>Selecciona un genero</option>
                    <option value='comedy'>Comedia</option>
                    <option value='drama'>Drama</option>
                    <option value='children'>Infantil</option>
                </select>
            </fieldset>
            <button type="submit" className="mt-3 btn btn-danger">Agregar</button>
        </form>
    )
}

export default Form