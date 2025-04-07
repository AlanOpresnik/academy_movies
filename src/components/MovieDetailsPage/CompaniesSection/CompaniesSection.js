import Image from 'next/image'
import React from 'react'

const CompaniesSection = ({ movie }) => {
    return (
        <section className='mx-6 mt-12'>
            <p className='text-4xl font-semibold mb-12'>Companias involucradas</p>
            <div className='flex flex-wrap  gap-12'>
                {movie.production_companies.map((comp) => (
                    <div key={comp.id}>
                        <div className='w-[450px]'>
                            <Image src={comp.logo_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' : `https://image.tmdb.org/t/p/original/${comp.logo_path}`} width={500} height={500} alt={comp.name} />
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <p>{comp.name}</p>
                            <p>Origen: {comp.origin_country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CompaniesSection