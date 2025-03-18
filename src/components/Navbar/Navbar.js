'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import Drawer from './Drawer/Drawer'
import DrawerCustom from './Drawer/Drawer'

const links = [
    { path: '/estrenos', label: 'Estrenos' },
    { path: '/populares', label: 'Populares' },
    { path: 'sobre-nosotros', label: 'Sobre Nosotros' }
]

const Navbar = () => {


    return (
        <>

            <div className='flex justify-between py-6 items-center font-semibold text-red-700 px-2'>
                <div className='flex items-center gap-2'>
                    <DrawerCustom />
                    <div>
                        <Link href={'/'}>Movies Gaston</Link>
                    </div>
                </div>
                <div className='hidden'>
                    <ul>
                        {links.map((l) => (
                            <li key={l.path}>
                                <Link href={l.path}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-4 text-sm font-semibold items-center'>
                    <Link href={'/login'}>
                        Iniciar Sesion
                    </Link>
                    <Link href={'/register'}>Registrarse</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar