import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    const yturl = "https://www.youtube.com/embed/"

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                // src={yturl + trailerVideo?.key + "?autoplay=1"}
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=0&mute=1&loop=1&playlist=${trailerVideo?.key}`}
                // src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div >
    )
}

export default VideoBackground
