import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoviesCard = ({movie}) => {
    const base_url_image = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    return (
        <div className='w-[250px] mb-12 rounded-xl mt-6 hover:transform hover:scale-105 transition duration-300 ease-in-out'>
            <Link className='w-[200px] h-[300px]' href={'/movieDetails/' + movie.id}>
                <Image className='h-[300px] rounded-xl object-cover' src={base_url_image} width={400} height={600} alt="card" />
            </Link>
        </div>
    )
}

export default MoviesCard