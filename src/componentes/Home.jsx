import HeroSlider from "./HeroSlider";
import CardPelicula from "./CardPelicula"
import {PeliculasUpcoming} from "./PeliculasUpcoming"


export function Home() {
    return (
        <>
            <HeroSlider />
            <CardPelicula />
            <PeliculasUpcoming url="https://api.themoviedb.org/3/movie/upcoming?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1" seccion={"Proximos Estrenos"} />
            <PeliculasUpcoming url="https://api.themoviedb.org/3/movie/popular?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1" seccion={"Mas populares"} />
        </>
    )
}