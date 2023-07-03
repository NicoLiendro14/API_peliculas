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
  },[])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  return (
      <div className="bg-slate-800">
        <h2 className="text-xl mx-auto px-2 pt-1 sm:px-2 sm:py-1 text-slate-50 font-serif font-medium tracking-wide md:pt-2 md:text-2xl lg:text-3xl lg:pt-4 xl:text-4xl xl:max-w-7xl xl:px-8"> {seccion}</h2>
        <Slider className="mx-auto px-2 py-1 xl:max-w-7xl xl:px-8" {...settings}>
          {
            peliculas?
            peliculas.map( (peli) => (
          <div onClick={ () => {
            setModal(peli)
            setAbrirModal(true)
          }} key={peli.id} 
            className="px-1 hover:cursor-pointer hover:opacity-70">
            <img className="w-64 h-72 rounded-sm" src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt="img-upcoming" />
          </div>
            ))
            :
            <div className="text-slate-50">Cargando...</div>
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