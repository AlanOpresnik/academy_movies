import { api } from '@/api/api'
import ActorsSection from '@/components/MovieDetailsPage/ActorsSection/ActorsSection'
import CompaniesSection from '@/components/MovieDetailsPage/CompaniesSection/CompaniesSection'
import HeaderMovie from '@/components/MovieDetailsPage/HeaderMovie/HeaderMovie'
import React from 'react'

const MovieDetailsPage = async ({ params }) => {
    const { id } = await params
    const movie = await api.getMovieById(id)
    if (!movie) return <div>Loading...</div>
    const movieTrailer = await api.getTrailerMovie(id)
    console.log(movieTrailer)
    const providers = await api.getProvidersMovie(id)
    console.log(providers)
    return (
        <div>
            <div>
                <HeaderMovie movie={movie} trailerKey={movieTrailer} providers={providers} />
            </div>
            <div>
                <ActorsSection id={id} />
            </div>
            <div>
                <CompaniesSection movie={movie} />
            </div>
        </div>
    )
}

export default MovieDetailsPage