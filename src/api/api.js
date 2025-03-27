


export const api = {
    getAllMovies: async (category) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/movie/${category}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ` Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return [];
            if (response.status_code === 404) console.log('error 404');
            console.log(process.env.NEXT_PUBLIC_API_URL)
            console.log(response);
            return response.results;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    getMovieById: async (id) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/movie/${id}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': ` Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                }
            }).then((res) => res.json());
            if (!response) return [];
            if (response.status_code === 404) console.log('error 404');
            console.log(response);
            return response;
    } catch(error) {
        console.log(error);
        return [];
    }
}
};