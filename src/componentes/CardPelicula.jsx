import { useEffect, useState } from "react"
import { getPeliculas2 } from "../servicios/getPeliculas";
import Pagination from './Paginacion'
import Modal from './Modal'

export default function CardPelicula() {

  let [peliculas, setPeliculas] = useState({});
  let [pagina, setPagina] = useState(1);
  let [abrirModal, setAbrirModal] = useState(false);
  let [peliculaModal, setPeliculaModal] = useState({});

  useEffect(() => {
    getPeliculas2(`https://api.themoviedb.org/3/movie/now_playing?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=${pagina}`)
      .then(
        peliculas => {
          setPeliculas(peliculas)
        }
      )
  }, [pagina])

  function cambiarPagina(valor) {
    if (pagina + valor <= 0) {
      /* Aca puede ir un modal o simplemente desactivar el boton */
      console.log("No hay paginas anteriores")
    }
    if (pagina + valor >= 1 && pagina + valor <= 94) {
      setPagina(pagina + valor)
    }
  }

  return (
    <div className="bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <p className="text-3xl text-slate-50 font-serif italic font-medium tracking-wide pb-1 md:text-4xl lg:text-5xl lg:py-3">Mis peliculas favoritas</p>
        <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {peliculas.results?.map((pelicula) => (
            <div key={pelicula.id} className="group relative" onClick={() => {
              setPeliculaModal(pelicula)
              setAbrirModal(true)
              }}>
              <div className="aspect-h-1 aspect-w w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
                  alt={"movie"}
                  className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-sm text-slate-100 md:text-base md:pl-1">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pelicula.title}
                    </p>
                  </h3>
                </div>
                  <p className="text-sm font-medium text-slate-100 text-right md:text-base pr-2">{pelicula.adult ? "+18" : "ATP"}</p>
              </div>
            </div>
          ))}
        </div>
          <Modal
              abrirModal={abrirModal}
              setOpen={setAbrirModal}
              contenidoPelicula={peliculaModal}
            />
        <Pagination
          paginaActual={peliculas.page}
          totalResultados={peliculas.total_results}
          cambiarPeliculas={cambiarPagina}
        />
      </div>
    </div>
  )
}
