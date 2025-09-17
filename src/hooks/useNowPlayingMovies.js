import { useDispatch } from 'react-redux';
import { addNowplayingMovies } from '../utils/movieSlice'
import { api_options } from '../utils/constant';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', api_options);
        const json = await data.json();
        dispatch(addNowplayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovie();
    }, [])
}

export default useNowPlayingMovies;