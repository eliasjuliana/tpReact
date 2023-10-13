import Card from "./Card";

const CardsGallery = (props) => {

    const {movies} = props;

    return (
        <section className="container row">
            {movies.length === 0? <p>No hay peliculas guardadas</p> : null}
            {movies.map((movie)=>{
                return <Card key={movie.id} movie = {movie}/>
            })}
        </section>
    )
}

export default CardsGallery