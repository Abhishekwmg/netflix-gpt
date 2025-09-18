import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.warn(movies, "Loading from MovieList Comp")

    if (!movies || movies.length === 0) return;


    return (
        <div className='px-6 transparent cursor-pointer hide-scrollbar'>
            <h1 className='text-3xl text-white font-bold py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map(movie => <MovieCard posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
