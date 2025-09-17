import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainier from './MainContainier';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainier />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
