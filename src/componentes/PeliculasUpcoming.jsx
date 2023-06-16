import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getPeliculas2 } from "../servicios/getPeliculas";
import Modal from "./Modal";

export function PeliculasUpcoming ( { url, seccion } ) {
  let [peliculas, setPeliculas] = useState([])
  let [abrirModal, setAbrirModal] = useState(false)
  let [modal, setModal] = useState({})
  
  useEffect( () => {
    getPeliculas2(url).then(
      response => setPeliculas(response.results)
    )
  })

  const settings = {
    dots: false,
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  return (
      <div className="bg-slate-800">
        <h2 className="text-xl mx-auto max-w-2xl sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8 text-slate-50 font-serif font-medium tracking-wide md:py-2 md:text-2xl lg:text-3xl lg:py-2 xl:text-4xl"> {seccion}</h2>
        <Slider className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-7" {...settings}>
          {
            peliculas?
            peliculas.map( (peli) => (
          <div onClick={ () => {
            setModal(peli)
            setAbrirModal(true)
          }} key={peli.id} className="px-3 hover:cursor-pointer hover:opacity-70">
            <img className="w-64 h-72 rounded-sm" src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt="img-upcoming" />
          </div>
            ))
            :
            <div>Cargando...</div>
          }
        </Slider>
        <Modal
              abrirModal={abrirModal}
              setOpen={setAbrirModal}
              contenidoPelicula={modal}
            />
      </div>
    );
}