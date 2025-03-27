import { api } from '@/api/api'
import HeaderMovie from '@/components/MovieDetailsPage/HeaderMovie/HeaderMovie'
import React from 'react'

const MovieDetailsPage = async ({ params }) => {
    const { id } = await params
    const movie = await api.getMovieById(id)
    return (
        <div>
            <div>
                <HeaderMovie movie={movie}/>
            </div>
        </div>
    )
}

export default MovieDetailsPage