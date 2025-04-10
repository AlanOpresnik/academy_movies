'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import DrawerCustom from './Drawer/Drawer';
import { api } from '@/api/api';
import Image from 'next/image';
import { useParams } from 'next/navigation'

const links = [
    { path: '/estrenos', label: 'Estrenos' },
    { path: '/populares', label: 'Populares' },
    { path: 'sobre-nosotros', label: 'Sobre Nosotros' },
];

const Navbar = () => {
    const [query, setQuery] = useState('');
    const [moviesString, setMoviesString] = useState('');
    const [movies, setMovies] = useState([]);
    const debounceRef = useRef(null);
    const params = useParams()

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        if (value.length >= 2) {
            debounceRef.current = setTimeout(() => {
                setMoviesString(value);
            }, 300);
        } else {
            setMovies([]);
        }
    };

    useEffect(() => {
        const fetchSearchMovies = async () => {
            if (moviesString.length < 2) return;
            const movies = await api.searchMovies(moviesString);
            setMovies(movies || []);
        };

        fetchSearchMovies();
    }, [moviesString]);

    useEffect(() => {
        setQuery('');
        setMovies([]);
    }, [params])
    

    return (
        <div className="flex justify-between fixed top-0 w-full bg-black opacity-85 z-50 py-6 items-center font-semibold text-white px-2">
            <div className="flex items-center gap-2">
                <DrawerCustom links={links} />
                <Link className="text-sm" href={'/'}>
                    Movies Gaston
                </Link>
            </div>

            <div className="flex gap-4 text-sm font-semibold items-center px-12 relative">
                <div className="flex flex-col w-[400px]">
                    <input
                        onChange={handleChange}
                        value={query}
                        type="text"
                        placeholder="Buscar..."
                        className="bg-gray-800 text-white px-4 py-2 rounded-md"
                    />

                    {/* Mostrar resultados solo si hay búsqueda */}
                    {query.length >= 2 && (
                        <div className="absolute top-[45px] bg-gray-800 rounded-md mt-2 w-full max-h-[300px] overflow-y-auto z-50">
                            {movies.length > 0 ? (
                                <ul className="flex flex-col gap-2 p-4">
                                    {movies.map((movie) => (
                                        <Link href={`/movieDetails/${movie.id}`} key={movie.id} className="hover:bg-gray-700 p-2 rounded-md flex items-center gap-2">
                                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={50} height={50} className="rounded-md" />
                                            <div>
                                                <h2>{movie.title}</h2>
                                                <p className='line-clamp-2 text-sm' >{movie.overview}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            ) : (
                                <div className="p-4 text-white text-sm">No se encontraron películas.</div>
                            )}
                        </div>
                    )}
                </div>

                <Link className="text-sm" href={'/login'}>
                    Iniciar Sesión
                </Link>
                <Link className="text-sm" href={'/register'}>
                    Registrarse
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
