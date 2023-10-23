const Card = (props) => {

    const {appointment} = props

    return (
        <article className="bg-dark p-3 mt-4 col-5 m-2">
            <div>
                <p>Mascota: {appointment.name}</p>
                <p>Duenio: {appointment.owner}</p>
            </div>
            <div>
                <p>Fecha: {appointment.date}</p>
                <p>Hora: {appointment.time}</p>
                <p>Sintomas: {appointment.symptoms}</p>
            </div>
            <button className="btn btn-danger">Borrar</button>
        </article>
    )
}

export default Card