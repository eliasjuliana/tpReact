import { useRef } from "react"

const Ejercicio8 = () => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const isValidData = (name, surname, phone, email) => {
        // name
        if (name.trim().length < 2) {
          return false;
        }

        // surname
        if (surname.trim().length < 2) {
            return false;
            }
    
        // phone
        if (isNaN(Number(phone))) {
          return false;
        }
    
        // email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
          return false;
        }
    
        return true;
      };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
    
        if (isValidData(name, surname, phone, email)) {
          alert('Datos enviados');
        } else {
          alert('Completar todos los datos');
        }
      };

  return (
    <div className="container p-5 bg-dark">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name-input" className='form-label'>Nombre</label>
                <input type="text" ref={nameRef} id="name-input" name="name" className="form-control" />
            </fieldset>
            <fieldset className="mt-2">
                <label htmlFor="surname-input" className='form-label'>Apellido</label>
                <input type="text" ref={surnameRef} id="surname-input" name="surname" className="form-control" />
            </fieldset>
            <fieldset className="mt-2">
                <label htmlFor="phone-input" className='form-label'>DNI</label>
                <input type="number" ref={phoneRef} id="phone-input" name="phone" className="form-control" />
            </fieldset>
            <fieldset className="mt-2">
                <label htmlFor="email-input" className='form-label'>Email</label>
                <input type="email" ref={emailRef} id="email-input" name="email" className="form-control" />
            </fieldset>
            <button type="submit" className="mt-3 btn btn-danger">Enviar</button>
        </form>
    </div>
  )
}

export default Ejercicio8