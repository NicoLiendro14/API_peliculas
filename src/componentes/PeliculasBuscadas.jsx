import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPeliculas2 } from "../servicios/getPeliculas";


export function PeliculasBuscadas() {
    let params = useParams();
    let [arrayPeliculas, setArrayPeliculas] = useState([]);

    useEffect(() => {
        getPeliculas2(`https://api.themoviedb.org/3/search/movie?query=${params.id}&api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1`).then(
            response => {
                setArrayPeliculas(response.results)
            }
        )
    }, [params.id]);

    return (
        <div className=" min-w-fit max-w-4xl mx-auto py-">
        <h1 className="text-xl text-slate-50 font-serif font-medium tracking-wide pb-1 px-1 md:text-2xl lg:text-3xl lg:py-3 xl:text-4xl ml-5">Resultados de la busqueda</h1>
        <ul className="divide-y divide-gray-100">
            {arrayPeliculas?
            arrayPeliculas.map((pelicula) => (
                <li key={pelicula.id} className="flex justify-between gap-x-6 py-3">
                    <div className="flex gap-x-4 ml-5">
                        <img className="h-20 w-17 rounded flex-none bg-gray-50" src={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`} alt="img-poster" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-100">{pelicula.title}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-400">{pelicula.release_date}</p>
                        </div>
                    </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end pr-4">
                            <p className="text-sm leading-6 text-gray-100">{pelicula.vote_average.toFixed(2)}</p>
                            {pelicula.adult ? (
                                <p className="mt-1 text-xs leading-5 text-gray-400">
                                    +18
                                </p>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <p className="text-xs leading-5 text-gray-400">ATP</p>
                                </div>
                            )}
                        </div>
                </li>
            )) :
            <div className="text-slate-50">
                cargando...
            </div>
            }
        </ul>
    </div>
    )
}