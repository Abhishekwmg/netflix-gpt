import React, { useEffect, useState } from "react"
import { api_options } from "../utils/constant"

const VideoBackground = ({ movieId }) => {
    console.log(movieId, "printing movie id");

    const [trailerId, setTrailerId] = useState();

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/1311031/videos?language=en-US", api_options);
        const json = await data.json();
        const filterData = json.results.filter(json => json.type === "Trailer");
        // console.log(json.results)
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerId(trailer.key);
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

    return (
        <div>
            <iframe
                src={"https://www.youtube.com/embed/" + trailerId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div >
    )
}

export default VideoBackground
