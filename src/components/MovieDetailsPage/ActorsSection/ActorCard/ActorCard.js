import Image from 'next/image'
import React from 'react'

const ActorCard = ({ actor }) => {
    return (
        <div className=''>
            <div className='relative'>
                <Image className='rounded-xl min-h-[300px]' src={actor.profile_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' : `https://image.tmdb.org/t/p/original/${actor.profile_path}`} width={600} height={600} alt={actor.name} />
                <div className='absolute top-0 w-full h-full bg-black opacity-60'></div>
            </div>
            <div className='absolute bottom-3 px-2'>
                <p className='font-semibold'>{actor.character}</p>
                <p className='text-sm'>{actor.name}</p>
            </div>
        </div>
    )
}

export default ActorCard