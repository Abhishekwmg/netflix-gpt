import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies);
    return (
        <div className='bg-black'>
            <div className=' -mt-24 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Popular"} movies={movies.topRatedMovies} />
                {/* <MovieList title={"Romantic"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
            </div>
        </div>
    )
}

export default SecondaryContainer;