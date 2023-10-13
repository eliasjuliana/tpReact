import React from 'react'

const Card = (props) => {

    const {movie} = props;

    return (
        <article className="bg-primary p-3 mt-4 col-5 m-2">
                <div>
                    <h3>{movie.name}</h3>
                    <p>{movie.genre}</p>
                    <p>{movie.description}</p>
                </div>
            </article>
    )
}

export default Card