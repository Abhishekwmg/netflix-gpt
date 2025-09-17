import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { useEffect } from "react";

const useMovieTrailer = () => {
    const dispatch = useDispatch();
    //Fetching Trailer Video
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/1311031/videos?language=en-US", api_options);
        const json = await data.json();
        const filterData = json.results.filter(json => json.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;