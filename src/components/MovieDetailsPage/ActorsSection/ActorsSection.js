import { api } from '@/api/api'
import Image from 'next/image'
import React from 'react'
import ActorCard from './ActorCard/ActorCard'
import ActorSwiper from './ActorSwiper/ActorSwiper'

const ActorsSection = async ({ id }) => {
    const actors = await api.getActorsMovies(id)
    console.log(actors)
    return (
        <section className='mx-6 py-16'>
            <div>
                <p className='text-4xl font-semibold mb-6'>Actores principales</p>
            </div>
            <div>
                <ActorSwiper actors={actors} />
            </div>
        </section>
    )
}

export default ActorsSection