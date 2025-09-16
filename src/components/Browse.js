import React, { useEffect } from 'react'
import Header from './Header'
import { api_options } from '../utils/constant';

const Browse = () => {

    const getNowPlayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options);
        const json = await data.json();
        console.log(json.results);
    }

    useEffect(() => {
        getNowPlayingMovie();
    }, [])

    return (
        <div>
            <Header />
            <h1>Browse</h1>
        </div>
    )
}

export default Browse
