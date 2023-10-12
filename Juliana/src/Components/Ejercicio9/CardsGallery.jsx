import Card from "./Card";

const CardsGallery = (props) => {

    const {appointments} = props;

    return (
        <section className="container row">
            {appointments.length === 0? <p>No hay citas programadas</p> : null}
            {appointments.map((appointment)=>{
                return <Card key={appointment.id} appointment = {appointment}/>
            })}
        </section>
    )
}

export default CardsGallery
