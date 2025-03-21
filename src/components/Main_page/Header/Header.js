import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className="relative ">
            <div className="w-full relative">
                <Image
                    className="w-full h-[800px] object-cover"
                    src="https://i.pinimg.com/originals/6d/cc/75/6dcc755041a58a12276d862da33c1d76.jpg"
                    alt="banner"
                    width={2000}
                    height={1000}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>


                <div className="absolute top-1/2 left-10 -translate-y-1/2 z-10 max-w-[600px] flex flex-col gap-4">
                    <h1 className="text-white text-4xl font-bold">UP Y SUS GLOBOS</h1>
                    <p>Una aventura de altura es una película de animación de Pixar y Walt Disney Pictures estrenada en 2009. Cuenta la historia de Carl Fredricksen, un vendedor de globos que decide volar su casa a las Cataratas del Paraís</p>
                    <button className='bg-red-900 px-4 py-2 rounded-full w-fit '>Ver Pelicula</button>
                </div>
            </div>
        </header>
    )
}

export default Header