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
        <Slider className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-8" {...settings}>
          {
            peliculas?
            peliculas.map( (peli) => (
          <div key={peli.id} className="px-3">
            <h3 className="h-16 flex justify-center items-center" >{peli.title}</h3>
            <img className="w-64 h-72" src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt="img-upcoming" />
          </div>
            ))
            :
            <div>Cargando...</div>
          }
        </Slider>
      </div>
    );
}