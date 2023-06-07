import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getPeliculasUpcoming } from "../servicios/getPeliculas";

export function PeliculasUpcoming () {
  let [peliculas, setPeliculas] = useState([])
  
  useEffect( () => {
    getPeliculasUpcoming().then(
      response => setPeliculas(response.results)
    )
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  return (
      <div className="bg-slate-600">
        <h2 className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-8 text-2xl text-slate-50 font-serif font-medium tracking-wide pb-1 md:text-3xl lg:text-4xl lg:py-3">Proximos Estrenos</h2>
        <Slider className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-8" {...settings}>
          {
            peliculas?
            peliculas.map( (peli) => (
          <div key={peli.id} className="px-3">
            <img className="w-64 h-72 rounded-sm" src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt="img-upcoming" />
          </div>
            ))
            :
            <div>Cargando...</div>
          }
        </Slider>
      </div>
    );
}