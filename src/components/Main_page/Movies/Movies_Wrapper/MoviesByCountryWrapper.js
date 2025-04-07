import { api } from "@/api/api"
import MoviesSwiper from "../Movies_Swiper/MoviesSwiper"



const MoviesByCountryWrapper = async ({country}) => {
    const movies = await api.getMovieByCountry(country);
    console.log(movies)
    return (
        <>
           <MoviesSwiper movies={movies}/>
        </>
    )
}

export default MoviesByCountryWrapper