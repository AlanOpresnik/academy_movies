import React from 'react'

const TrailerMovie = ({trailerKey}) => {
    return (
        <iframe
            width="100%"
            height="700"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default TrailerMovie