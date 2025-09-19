import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainier from './MainContainier';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GPTSearch from './GPTSearch/GPTSearch';
import { useSelector } from 'react-redux';




const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    console.log(showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies()

    return (
        <div>
            <Header />
            {
                showGPTSearch ? <GPTSearch /> : <><MainContainier />
                    <SecondaryContainer /></>
            }
        </div>
    )
}

export default Browse
