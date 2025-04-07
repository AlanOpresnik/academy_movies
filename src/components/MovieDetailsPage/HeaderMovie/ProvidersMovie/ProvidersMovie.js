import React from 'react'

const ProvidersMovie = ({ providers }) => {
    if (!providers || Object.keys(providers).length === 0) {
      return <p>No hay plataformas disponibles.</p>;
    }
  
    // Extraemos todos los providers de todos los países
    const allProviders = [];
  
    for (const countryCode in providers) {
      const country = providers[countryCode];
      const types = ['flatrate', 'rent', 'buy'];
  
      types.forEach(type => {
        if (country[type]) {
          country[type].forEach(provider => {
            allProviders.push(provider);
          });
        }
      });
    }
  
    // Eliminamos duplicados por provider_id
    const uniqueProviders = Array.from(
      new Map(allProviders.map(p => [p.provider_id, p])).values()
    );
  
    return (
      <div className="flex gap-4 flex-wrap items-center">
        {uniqueProviders.map(provider => (
          <div key={provider.provider_id} className="flex flex-col items-center">
            <img
              src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
              alt={provider.provider_name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ProvidersMovie;
  