import { useEffect, useState } from "react"
import { getPeliculas } from "../servicios/getPeliculas";
/* https://image.tmdb.org/t/p/original link para el src de la img */

export default function CardPelicula() {

  let [peliculas, setPeliculas] = useState({});

  useEffect(() => {
    getPeliculas()
      .then(
        peliculas => setPeliculas(peliculas)
      )
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {peliculas.results?.map((pelicula) => (
            <div key={pelicula.id} className="group relative">
              <div className="aspect-h-1 aspect-w w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
                  alt={"image"}
                  className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gr¬ay-700">
                    <a href={"#"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pelicula.original_title}
                    </a>
                  </h3>
                  <h3 className="text-sm text-gr¬ay-700">
                    <a href={"#"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pelicula.vote_average}
                    </a>
                  </h3>
                  {/* Ver mas  info */}
                  <p className="mt-1 text-sm text-gray-500">{pelicula.vote_average}</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-900">{pelicula.release_date}</p>
                <p className="text-sm font-medium text-gray-900 text-right pr-1">{pelicula.adult? "+18" : "ATP"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
