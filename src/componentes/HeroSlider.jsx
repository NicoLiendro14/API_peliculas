import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getPeliculas2 } from "../servicios/getPeliculas";
import "./HeroSlider.css"

export default function HeroSlider() {
    let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
    }

    let [peliculasTop, setPeliculasTop] = useState([])

    useEffect(() => {
        getPeliculas2("https://api.themoviedb.org/3/movie/top_rated?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1").then(peliculas => {
            setPeliculasTop(peliculas.results.slice(0, 5))
        })
    }, [])

    return (
        <div className="bg-slate-800">
            <Slider {...settings}>
                {
                    peliculasTop?
                    peliculasTop.map(pelicula => (
                        <div key={pelicula.id}>
                            <h2 className="absolute px-4 py-4 sm:text-base text-yellow-200 md:text-3xl md:px-7 md:py-6 lg:text-4xl lg:px-8 lg:py-7 font-serif font-bold">{pelicula.original_title}</h2>
                            <img className="w-full px-1 my-0 mx-auto altura-img rounded-xl" src={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`} alt="img-slider" />
                        </div>
                    ))
                    :
                    <div>
                        Cargando...
                    </div>
                }
            </Slider>
        </div>
    );
}