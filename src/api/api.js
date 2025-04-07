


export const api = {
    getAllMovies: async (category, page = 1) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/movie/${category}?page=${page}`, {
                cache: 'force-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ` Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return [];
            if (response.status_code === 404) console.log('error 404');
            return response.results;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    getMovieById: async (id) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/movie/${id}`, {
                cache: 'force-cache',
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': ` Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return [];
            if (response.status_code === 404) console.log('error 404');
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    getActorsMovies: async (id) => {
        try {
            console.log(id)
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            })
            if (!response) return new Error(`No hay respuesta`)
            if (!response.ok) return new Error(`Respuesta fallo`)
            const data = await response.json();
            return data.cast;
        } catch (error) {
            console.log(error)
        }
    },
    getMovieByCountry: async (country) => {
        try {
            console.log(country)
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_origin_country=${country}&sort_by=popularity.desc`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) new Error(`No hay respuesta`)
            if (!response.ok) new Error(`Respuesta fallo`);

            return response.results;
        } catch (error) {
            console.log(error)
            return []
        }
    },
    getTrailerMovie: async (id) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return new Error(`No hay respuesta`)
            return response.results[0].key;
        } catch (error) {
            console.log(error)
            return []
        }
    },
    getProvidersMovie: async (id) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return new Error(`No hay respuesta`)
            return response.results;

        } catch (error) {   
            console.log(error)
            return []
        }
    },
};