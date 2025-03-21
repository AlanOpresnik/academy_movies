import Header from "@/components/Main_page/Header/Header";
import MoviesWrapper from "@/components/Main_page/Movies/Movies_Wrapper/MoviesWrapper";
export default function Home() {
  return (
   <div>
      <Header/>
      <div className="px-12 mt-12">
        <p className="text-2xl font-bold">Peliculas en estreno</p>
        <MoviesWrapper/>
      </div>
   </div>
  );
}
