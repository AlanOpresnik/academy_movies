import { api } from "@/api/api"
import MoviesSwiper from "../Movies_Swiper/MoviesSwiper"



const MoviesWrapper = async ({category}) => {
    const movies = await api.getAllMovies(category);
    return (
        <>
           <MoviesSwiper movies={movies}/>
        </>
    )
}

export default MoviesWrapper