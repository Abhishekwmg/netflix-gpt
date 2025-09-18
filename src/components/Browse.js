import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainier from './MainContainier';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies()

    return (
        <div>
            <Header />
            <MainContainier />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
