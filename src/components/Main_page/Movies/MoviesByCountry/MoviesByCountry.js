import React from 'react'
import MoviesByCountryWrapper from '../Movies_Wrapper/MoviesByCountryWrapper'

const MoviesByCountry = ({country}) => {
  return (
    <div>
        <p className="text-2xl font-bold">Peliculas por pais AR</p>
        <MoviesByCountryWrapper country={country} />
    </div>
  )
}

export default MoviesByCountry