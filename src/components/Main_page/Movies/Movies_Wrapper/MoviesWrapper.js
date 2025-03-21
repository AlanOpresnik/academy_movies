import { api } from "@/api/api"
import MoviesSwiper from "../Movies_Swiper/MoviesSwiper"

const MoviesWrapper = async () => {
    const movies = await api.getAllMovies()
    return (
        <>
           <MoviesSwiper movies={movies}/>
        </>
    )
}

export default MoviesWrapper