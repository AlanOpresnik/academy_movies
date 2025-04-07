import Header from "@/components/Main_page/Header/Header";
import MoviesWrapper from "@/components/Main_page/Movies/Movies_Wrapper/MoviesWrapper";
import MoviesByCountry from "@/components/Main_page/Movies/MoviesByCountry/MoviesByCountry";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-12 mt-12">
        <p className="text-2xl font-bold">Peliculas en estreno</p>
        <MoviesWrapper category={'now_playing'} />
        <p className="text-2xl font-bold">Peliculas mejor puntuadas</p>
        <MoviesWrapper category={'top_rated'} />
        <div>
          <MoviesByCountry country={'AR'} />
        </div>
        <div>
          <MoviesByCountry country={'MX'} />
        </div>
      </div>
    </div>
  );
}
