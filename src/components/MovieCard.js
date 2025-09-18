import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-40 pr-4'>
            <img src={IMAGE_CDN + posterPath} alt="movie_poster" />
        </div>
    )
}


export default MovieCard
