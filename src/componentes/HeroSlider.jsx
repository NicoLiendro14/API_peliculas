import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getPeliculasTop } from "../servicios/getPeliculas";
import "./HeroSlider.css"

export default function HeroSlider() {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
    }

    let [peliculasTop, setPeliculasTop] = useState([])

    useEffect(() => {
        getPeliculasTop().then(peliculas => {
            setPeliculasTop(peliculas.results.slice(0, 5))
        })
    }, [])

    return (
        <div className="bg-slate-600">
            <Slider {...settings}>
                {
                    peliculasTop?
                    peliculasTop.map(pelicula => (
                        <div key={pelicula.id}>
                            <h2 className="absolute px-4 sm:text-base py-2 text-yellow-200 md:text-3xl md:px-6 md:py-4 lg:text-4xl lg:px-8 lg:py-5 font-serif font-bold">{pelicula.original_title}</h2>
                            <img className="w-full altura-img" src={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`} alt="img-slider" />
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