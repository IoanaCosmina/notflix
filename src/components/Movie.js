import React from 'react';

const Movie = ({ movie }) => {
    if (!movie) return null;

    const { Title, Year, Genre, Actors, Poster, Plot } = movie;

    return (
        <div className='media content-container'>
            <div className='img'>
                <img src={Poster} alt='poster-image' />
            </div>
            <div className='content'>
                <h3>{Title}</h3>
                <p>Year: {Year}</p>
                <p>Genre: {Genre}</p>
                <p>Actors: {Actors}</p>
                <p>Summary: {Plot}</p>
            </div>
        </div>
    )
}

export default Movie;