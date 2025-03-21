'use client'
import Link from 'next/link'
import React from 'react'

import DrawerCustom from './Drawer/Drawer'

const links = [
    { path: '/estrenos', label: 'Estrenos' },
    { path: '/populares', label: 'Populares' },
    { path: 'sobre-nosotros', label: 'Sobre Nosotros' }
]

const Navbar = () => {


    return (
        <>

            <div className='flex justify-between fixed top-[0px] w-full bg-black opacity-85  z-50 py-6 items-center font-semibold text-white px-2'>
                <div className='flex items-center gap-2'>
                    <DrawerCustom links={links} />
                    <div>
                        <Link className='text-sm' href={'/'}>Movies Gaston</Link>
                    </div>
                </div>
                <div className='hidden'>
                    <ul>
                        {links.map((l) => (
                            <li key={l.path}>
                                <Link className='opacity-100' href={l.path}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-4 text-sm font-semibold items-center'>
                    <Link className='text-sm' href={'/login'}>
                        Iniciar Sesion
                    </Link>
                    <Link className='text-sm' href={'/register'}>Registrarse</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar