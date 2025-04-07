'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrailerMovie from './TrailerMovie/TrailerMovie';
import ProvidersMovie from './ProvidersMovie/ProvidersMovie';
const HeaderMovie = ({ movie, trailerKey, providers }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        movie && (
            <header className="relative ">
                {open && (
                    <div className='flex justify-center'>
                        <div className="absolute top-30  w-[1200px] !h-[500px]  z-20">
                            <div className='absolute bg-red-600 p-4 rounded-full top-0 right-0  cursor-pointer' onClick={handleClose}>
                                X
                            </div>
                            <TrailerMovie trailerKey={trailerKey} />
                        </div>
                    </div>
                )}
                <div className="w-full relative">
                    <Image
                        className="w-full h-[100vh] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="banner"
                        width={2000}
                        height={1000}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>


                    <div className="absolute top-1/2 left-10 -translate-y-1/2 z-10 max-w-[600px] flex flex-col gap-4">
                        <div className="flex gap-2">
                            {movie.genres.map((genre, index) => (
                                <div key={genre.id} className="flex items-center">
                                    <p className="text-white text-md">{genre.name}</p>
                                    {index < movie.genres.length - 1 && <span className="text-white ml-2 ">/</span>}
                                </div>
                            ))}
                        </div>
                        <h1 className="text-white text-7xl font-bold">{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <div>
                            <p>Duracion: <span>{movie.runtime} min</span> <AccessTimeIcon sx={{
                                scale: 1.1
                            }} /></p>
                        </div>
                        <div className='flex items-center gap-6'>
                            <button className='bg-red-900 px-4 py-2 rounded-full w-fit '>Ver Pelicula</button>
                            <button onClick={handleOpen} className='border px-4 py-2 cursor-pointer rounded-full w-fit '>Ver Trailer</button>
                        </div>
                        <div>
                            <ProvidersMovie providers={providers}/>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-10 right-0 '>
                    <div className='h-[300px] w-[500px]'>
                        <Image className='h-[300px] object-contain w-[500px]' cl src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={600} height={200} />
                    </div>
                </div>
                <div className='absolute top-50 right-50'>
                    <div className='flex p-4 py-5 font-bold rounded-full text-xl  border-red-700 border-4'>
                        <p>{Number(Math.round(movie.vote_average))}</p>
                        <span> / </span>
                        <p>10</p>
                    </div>
                </div>
            </header>
        )
    )
}

export default HeaderMovie