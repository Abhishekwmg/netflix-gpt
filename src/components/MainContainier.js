import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainier = () => {

    // const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    // if (movies === null) return;
    // // const mainMovie = movies[0];
    // // console.log(mainMovie);

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    const { title, overview, id } = mainMovie;
    console.log(mainMovie)


    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainier
